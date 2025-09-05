import React, { useState, useEffect } from 'react'''
import { SEO } from '@/components/SEO'''
import TalentCard from '@/components/talent/TalentCard'''
import { useAuth } from '@/hooks/useAuth'''
import { supabase } from '@/integrations/supabase/client'''
import { toast } from 'sonner'''
export default function SavedTalentsPage() { const { user } = useAuth(); const [savedTalents,setSavedTalents] = useState([]); const [isLoading,setIsLoading] = useState(true); useEffect(() => { const fetchSavedTalents = async () => { setIsLoading(true); try { if (!user) { setSavedTalents([]); return} const mockTalents = [ { id: '1',name: 'John Doe',title: 'Full Stack Developer',location: 'San Francisco,CA',rating: 4.8,hourlyRate: 75,availability: 'Available now',skills: ['React','Node.js','TypeScript'],image: null },{ id: '2',name: 'Jane Smith',title: 'UI/UX Designer',location: 'New York,NY',rating: 4.9,hourlyRate: 65,availability: 'Available in 2 days',skills: ['Figma','Adobe XD','Sketch'],image: null }; ]; setSavedTalents(mockTalents)} catch (error) { console.error('Error fetching saved talents:',error); toast.error('Failed to load saved talents''})
cursor/fix-lint-push-and-merge-to-main-f3c1;)'