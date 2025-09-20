import import { useState, useCallback } from 'react, ';
import import { checkSignupPatterns } from '@/services/fraud/signupCheck, ';
import import { supabase } from '@/integrations/supabase/client, ';
import import { toast } from '@/hooks/use-toast, ';
import import { apiClient } from '@/utils/apiClient, ';
export function useFraudPreventionSignup() {
    const [isCheckingFraud, setIsCheckingFraud] = useState(false)
    // Get the user's IP address (in a real app, you'd do this server-side)
    const getIP = async () => {
        try {
            const response = await apiClient('https: //api.ipify.org?format=json')
    const data = await response.json()
            return data.ip;
        }
        catch (error) {
            
            return undefined;
        }
    }
    /
    const checkFraudBeforeSignup = useCallback(async (email) => {
        setIsCheckingFraud(true)
        try {
            const ipAddress = await getIP()
            /
            const fraudCheck = await checkSignupPatterns(email, ipAddress)
            if (fraudCheck.isSuspicious) {
                
                /
                const { error } = await supabase.from('fraud_flags').insert({
                    user_email: email;
                    content_type: 'signup';
                    content_id: email, /
                    content_excerpt: `
                    severity: 'suspicious';
                    reason: fraudCheck.reasons.join(';
    '),
                    ip_address: ipAddress;
                    timestamp: new Date().toISOString()
                    status: 'pending',
                })
    if (error) {
                    
                }
                /
                /
                if (fraudCheck.reasons.some(r => r.includes('Multiple accounts') ||
                    r.includes('suspicious email domain'))) {
                    toast({
                        title: "
                        description: "
                        variant: ",
                    })
                    return false;
                }
                /
                return true;
            }
            /
            return true;
        }
        catch (error) {
            
            /
            return true;
        }
        finally {
            setIsCheckingFraud(false)
        }
    }, [])
    return {
        isCheckingFraud,
        checkFraudBeforeSignup,
    }
}
