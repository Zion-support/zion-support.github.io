import React from 'react';
import Head from 'next/head';
      <Head><title>verify-status - Zion App</title><meta name="description" content="verify-status page" /></Head><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-6">verify-status</h1><p className="text-lg mb-4">This page is under construction.</p><div className="mt-4"><a href="/" className="text-blue-600 hover:underline">;
      <Head><title>verify-status - Zion App</title><meta name="description" content="verify-status page" /></Head><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-6">verify-status</h1><p className="text-lg mb-4">This page is under construction.</p><div className="mt-4"><a href="/" className="text-blue-600 hover:underline">;

export default Verifystatus;



import { useState, useEffect } from 'react',;
import { useRouter } from 'next/router',;
import { Input } from '@/components/ui/input',;
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';
import { AuthLayout } from '@/layout',;
import { supabase } from '@/integrations/supabase/client', // Import Supabase client
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state
import { logWarn, logErrorToProduction } from '@/utils/productionLogger',;
export default function VerifyStatus() {

  const [lastSentTime, setLastSentTime] = useState<Date | null>(null),






import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Alert, AlertDescription } from '@/components/ui/alert';


import { supabase } from '@/integrations/supabase/client', // Import Supabase client
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus() {


import { supabase } from '@/integrations/supabase/client', // Import Supabase client;
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state;
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus(req, res) {

  const [lastSentTime, setLastSentTime] = useState<Date | null>(null);







import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';
import { AuthLayout } from '@/layout';




    <AuthLayout>;




              <Mail className="h-6 w-6 text-blue-600" />




            <Alert className="border-green-500 bg-green-50 text-green-900">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
              <AlertDescription>{message}</AlertDescription>
            </Alert>




            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
              <AlertDescription>{error}</AlertDescription>
            </Alert>




            <Input

              <Mail className="h - 6 w - 6 text - blue - 600" />;
            <Alert className="border - green - 500 bg - green - 50 text - green - 900">;
              <CheckCircle className="h - 4 w - 4" />;
              <AlertDescription>{message}</AlertDescription>;
              <AlertDescription>{message}</AlertDescription>;
            </Alert>)}
            <Alert variant="destructive">;
              <AlertCircle className="h - 4 w - 4" />;
              <AlertDescription>{error}</AlertDescription>;
              <AlertDescription>{error}</AlertDescription>;
            </Alert>)}

            <Input;












            <Button;


                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  <Eye className="h-4 w-4 mr-2" />




            </Button>;
            <Button;


                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  <Clock className="h-4 w-4 mr-2" />
                  <Mail className="h-4 w-4 mr-2" />

            <Button;
                  <RefreshCw className="h - 4 w - 4 mr - 2 animate - spin" />;
                  <Eye className="h - 4 w - 4 mr - 2" />;
            </Button>;
            <Button;
                  <RefreshCw className="h - 4 w - 4 mr - 2 animate - spin" />;
                  <Clock className="h - 4 w - 4 mr - 2" />;
                  <Mail className="h - 4 w - 4 mr - 2" />;
            </Button>;

            <Button;


            </Button>




            <Button




              <ArrowLeft className="h-4 w-4 mr-1" />
            </Button>


            <Button


            </Button>
            <Button




            </Button>
    </AuthLayout>


            </Button>;
            <Button;
              <ArrowLeft className="h - 4 w - 4 mr - 1" />;
            </Button>;
            <Button;
            </Button>;
            <Button;
            </Button>;
    </AuthLayout>);




