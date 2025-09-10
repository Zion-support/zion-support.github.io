  const handleViewProfile = (talentId: string) => {;
    console.log("View talent profile:", talentId);
    toast({;
      title: "View Profile",
      description: `Navigating to talent profile: ${talentId}`,,
});
};
  const handleInvite = (talentId: string) => {;
    console.log("Invite talent:", talentId);
    toast({;
      title: "Invite Talent",
      description: `Inviting talent: ${talentId}`,,
});
};
  const handleRefresh = () => {;
    setIsProcessing(true);
    fetchSuggestedTalents().finally(() => {;
      setIsProcessing(false);
});
};
  useEffect(() => {
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function;
};
}, []); []);
    if(jobId) {;
      fetchSuggestedTalents();
}
  }, [jobId, fetchSuggestedTalents]); // Added fetchSuggestedTalents;

  // Transform data to match JobMatchCard component props;
  const transformedTalents = talents.map(talent => {;
    return {;
      id: talent.talent_profile?.id || '',
      name: talent.talent_profile?.full_name || 'Talent',
      title: talent.talent_profile?.professional_title || 'Talent',
      company: talent.talent_profile?.company_name || '',
      avatar: talent.talent_profile?.profile_picture_url || '',
      location: talent.talent_profile?.location || 'Remote',
      category: talent.talent_profile?.category || 'Technology',
      matchPercent: talent.match_score || 85,
      skills: talent.talent_profile?.skills || [],,
};
});
  return (<Card className="border-zion-blue-light bg-zion-blue">;
      <CardHeader>;
        <CardTitle>{jobTitle ? `Talents for ${jobTitle}` : 'Suggested Talents'}</CardTitle>;
      </CardHeader>;
      <CardContent className="pt-6">;
        {isLoading ? (;
          <div>Loading suggested talents...</div>;
        ) : talents.length === 0 ? (;
          <EmptyMatchesCard onRefresh={handleRefresh} isProcessing={isProcessing} />;
        ) : (;
          <div className="space-y-4">;
            {transformedTalents.map((talent) => (;
              <JobMatchCard;
                key={talent.id}
                matchId={talent.id}
                talentId={talent.id}
                name={talent.name}
                title={talent.title}
                company={talent.company}
                avatar={talent.avatar}
                location={talent.location}
                category={talent.category}
                matchPercent={talent.matchPercent}
                skills={talent.skills}
                onApply={() => handleViewProfile(talent.id)}
                onViewDetails={() => handleViewProfile(talent.id)}
                onInvite={() => handleInvite(talent.id)}
              />;
            ))}
          </div>;
        )}
      </CardContent>;
    </Card>;
  );
}
import { useEffect,useState,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; import { toast } from '@/hooks/use-toast'; import { Card,CardContent,CardHeader,CardTitle } from '@/components/ui/card'; import { EmptyMatchesCard } from './EmptyMatchesCard'; import { JobMatchCard } from './JobMatchCard'; export function SuggestedTalents(props: any) { const [talents,setTalents] = useState<any[]>([]); const [isLoading,setIsLoading] = useState<any>(true); const [isProcessing,setIsProcessing] = useState<any>(false); const fetchSuggestedTalents = useCallback(async () => { setIsLoading(true); try { const { data,error } = await supabase .from("suggested_talents") .select(` *,talent_profile: talent_i d( id,user_id,full_name,professional_title,profile_picture_url,hourly_rate,bio,years_experience,key_projects,skills,location,category,company_name ) `) .eq("job_id",jobId); if(error) throw error; setTalents(data || [])} catch(error) { console.error("Error fetching suggested talents:",error); toast({ title: "Error",description: "Failed to load suggested talents.Please try again later.",variant: "destructive",})} finally { setIsLoading(false)} },[jobId]); const handleViewProfile = (props: any) => { toast({ title: "View Profile",description: `Navigating to talent profile: ${talentId}`,})}; const handleInvite = (props: any) => { toast({ title: "Invite Talent",description: `Inviting talent: ${talentId}`,})}; const handleRefresh = (props: any) => { setIsProcessing(true); fetchSuggestedTalents().finally(() => { setIsProcessing(false)})}; useEffect(() => { return () => { }},[]);,[]); if(jobId) { fetchSuggestedTalents()} },[jobId,fetchSuggestedTalents]); const transformedTalents = talents.map(talent => { return { id: talen t.talent_profile?.id || '',name: talen t.talent_profile?.full_name || 'Talent',title: talen t.talent_profile?.professional_title || 'Talent',company: talen t.talent_profile?.company_name || '',avatar: talen t.talent_profile?.profile_picture_url || '',location: talen t.talent_profile?.location || 'Remote',category: talen t.talent_profile?.category || 'Technology',matchPercent: talen t.match_score || 85,skills: talen t.talent_profile?.skills || [],}}); return (<Card className="border-zion-blue-light bg-zion-blue"> <CardHeader> <CardTitle>{jobTitle ? `Talents for ${jobTitle}` : 'Suggested Talents'}</CardTitle> </CardHeader> <CardContent className="pt-6"> {isLoading ? ( <div>Loading suggested talents...</div> ) : talents.length === 0 ? ( <EmptyMatchesCard onRefresh={handleRefresh} isProcessing={isProcessing} /> ) : ( <div className="space-y-4"> {transformedTalents.map((talent) => ( <JobMatchCard key={talent.id} matchId={talent.id} talentId={talent.id} name={talent.name} title={talent.title} company={talent.company} avatar={talent.avatar} location={talent.location} category={talent.category} matchPercent={talent.matchPercent} skills={talent.skills} onApply={() => handleViewProfile(talent.id)} onViewDetails={() => handleViewProfile(talent.id)} onInvite={() => handleInvite(talent.id)} /> ))} </div> )} </CardContent> </Card> )} </JobMatchCard> </any> </any> </any>