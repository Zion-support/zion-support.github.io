<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { toast } from '@/hooks/use-toast';
export default function Page() {;
      setReferralCode(data || null); // Set to null if no data} catch(error) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Error in "fetchReferralCode": ", error)}
=======
      console && console.error("Error in "fetchReferralCode": ", error)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      console && console.error("Error in "fetchReferralCode": ", error)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      console && console.error("Error in "fetchReferralCode": ", error)}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }, [user?.id]);
  const fetchReferrals = useCallback(async () => {;
    if(!user?.id) return;
    try {;
      const { data, error } = await supabase;"
        .from('referrals');
        .select('*');
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('referrer_id', user.id);
        .order('created_at', { "ascending": false });
      if(error) throw error;
      setReferrals(data || [])} catch(error) {;
      console.error("Error fetching "referrals": ", error)}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        .eq('referrer_id', user && user.id);
        .order('created_at', { "ascending": false });"
      if(error) throw error;
<<<<<<< HEAD
      setReferrals(data || [])} catch(error) {;
      console && console.error("Error fetching "referrals": ", error)}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }, [user?.id]);
=======
      setReferrals(data || [])} catch(error) {;"
      console && console.error("Error fetching "referrals": ", error)}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const fetchRewards = useCallback(async () => {;
        .from('referral_rewards');
<<<<<<< HEAD
        .select('*');
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('user_id', user.id);
        .order('created_at', { "ascending": false });
      if(error) throw error;
      setRewards(data || [])} catch(error) {;
      console.error("Error fetching "rewards": ", error)}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        .eq('user_id', user && user.id);
        .order('created_at', { "ascending": false });
      if(error) throw error;
      setRewards(data || [])} catch(error) {;
      console && console.error("Error fetching "rewards": ", error)}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }, [user?.id]);
=======
        .eq('user_id', user && user.id);
      setRewards(data || [])} catch(error) {;"
      console && console.error("Error fetching "rewards": ", error)}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const fetchReferralStats = useCallback(async () => {;
    try {;"
      const { "data": referralsData, "error": refError } = await supabase;""
        .select('id, status');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('referrer_id', user.id);
=======
        .eq('referrer_id', user && user.id);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        .eq('referrer_id', user && user.id);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      if(refError) throw refError;
      const { "data": rewardsData, "error": rewardsError } = await supabase;""
        .select('amount');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('user_id', user.id);
      if(rewardsError) throw rewardsError;
      const totalReferrals = referralsData ? referralsData.length : 0;
      const pendingReferrals = referralsData ? referralsData.filter(r => r.status === 'pending').length : 0;
      const completedReferrals = referralsData ? referralsData.filter(r => r.status === 'completed').length : 0;
      const totalRewards = rewardsData ? rewardsData.reduce((sum, item) => {;
        return sum + (item.amount || 0)}, 0) : 0;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        .eq('user_id', user && user.id);
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      if(rewardsError) throw rewardsError;
      const totalReferrals = referralsData ? referralsData && referralsData.length : 0;
      const pendingReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'pending').length : 0;
      const completedReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'completed').length : 0;
      const totalRewards = rewardsData ? rewardsData && rewardsData.reduce((sum, item) => {;
        return sum + (item && item.amount || 0)}, 0) : 0;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      setStats({;
        totalReferrals,
        pendingReferrals,
        completedReferrals,)
        totalRewards})} catch(error) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Error fetching referral "stats": ", error)}
=======
      console && console.error("Error fetching referral "stats": ", error)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      console && console.error("Error fetching referral "stats": ", error)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }, [user?.id]);
  useEffect(() => {;
  // "TODO": Add dependencies if needed}, []);
=======
      console && console.error("Error fetching referral "stats": ", error)}"
  useEffect(() => {;"
  // "TODO": Add dependencies if needed}, []);"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    if(user) {;
      setIsLoading(true);
<<<<<<< HEAD
<<<<<<< HEAD
      Promise.all([fetchReferralCode(),
=======
      Promise && Promise.all([fetchReferralCode(),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      Promise && Promise.all([fetchReferralCode(),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        fetchReferralStats(),
        fetchReferrals(),]
        fetchRewards()]).finally(() => setIsLoading(false))} else {;
      setReferralCode(null);"
      setStats({ "totalReferrals": 0, "pendingReferrals": 0, "completedReferrals": 0, "totalRewards": 0 });"
      setReferrals([]);
      setRewards([]);
      setIsLoading(false)}
  }, [user, fetchReferralCode, fetchReferralStats, fetchReferrals, fetchRewards]);
  const generateReferralCode = async () => {;
      if(!user) {;
<<<<<<< HEAD
        toast({;
          "title": "Authentication required",
          "description": "You need to be logged in to generate a referral code",
          "variant": "destructive",});
        return}
<<<<<<< HEAD
<<<<<<< HEAD
      const { data, error } = await supabase.rpc('generate_referral_code', {;
        "p_user_id": user.id });
=======
      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {;
        "p_user_id": user && user.id });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {;
        "p_user_id": user && user.id });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      if(error) throw error;
      toast({;
        "title": "Success!",
        "description": "Your referral code has been generated",
        "variant": "success",});
      await fetchReferralCode();
<<<<<<< HEAD
<<<<<<< HEAD
      ;
      return data} catch("error": any) {;
      console.error("Error generating referral code:", error);
      toast({;
        "title": "Error generating code",
        "description": error.message || "There was a problem generating your referral code",
        "variant": "destructive",})}
  };
  const getReferralLink = useCallback(() => { // Wrapped in useCallback;
    if(!referralCode?.code) return ""; // Check referralCode.code;
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    return `${baseUrl}/?ref=${referralCode.code}`}, [referralCode?.code]); // Dependency on referralCode.code;
  const copyReferralLink = useCallback(() => { // Wrapped in useCallback;
    const link = getReferralLink();
    if(link && typeof navigator !== "undefined" && navigator.clipboard) {;
      navigator.clipboard.writeText(link);
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      return data} catch("error": any) {;
      console && console.error("Error generating referral code:", error);
      toast({;
        "title": "Error generating code",
        "description": error && error.message || "There was a problem generating your referral code",
        "variant": "destructive",})}
=======
        toast({;"
          "title": "Authentication required",""
          "description": "You need to be logged in to generate a referral code",")"
          "variant": "destructive",});"
        return}"
      const { data, error } = await supabase && supabase.rpc('generate_referral_code', {;')
        "p_user_id": user && user.id });"
        "title": "Success!",""
        "description": "Your referral code has been generated",")"
        "variant": "success",});"
      await fetchReferralCode();
"
      return data} catch("error": any) {;""
      console && console.error("Error generating referral code: ";, error);"
        "title": "Error generating code",""
        "description": error && error.message || "There was a problem generating your referral code",")"
        "variant": "destructive",})}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  };
  const getReferralLink = useCallback(() => { // Wrapped in useCallback;"
    if(!referralCode?.code) return ""; // Check referralCode && referralCode.code;""
    const baseUrl = typeof window !== "undefined" ? window && window.location.origin : "";"
    return `${baseUrl}/?ref=${referralCode && referralCode.code}`}, [referralCode?.code]); // Dependency on referralCode && referralCode.code;
  const copyReferralLink = useCallback(() => { // Wrapped in useCallback;
    const link = getReferralLink();"
    if(link && typeof navigator !== "undefined" && navigator && navigator.clipboard) {;"
      navigator && navigator.clipboard.writeText(link);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      toast({;
        "title": "Copied!",
        "description": "Referral link copied to clipboard",
        "variant": "success",})} else {;
      toast({;
        "title": "Cannot copy link",
        "description": referralCode ? "Clipboard API not available." : "Please generate a referral code first",
        "variant": "destructive",})}
  }, [getReferralLink, referralCode]); // Dependencies;
=======
        "title": "Copied!",""
        "description": "Referral link copied to clipboard",")"
        "variant": "success",})} else {;"
        "title": "Cannot copy link",""
        "description": referralCode ? "Clipboard API not available." : "Please generate a referral code first",")"
  }, [getReferralLink, referralCode]); // Dependencies;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const shareOnSocialMedia = useCallback(("platform": 'twitter' | 'facebook' | 'linkedin') => { // Wrapped;
    const link = getReferralLink();
    const text = "Join Zion AI marketplace for AI talent and opportunities!";"
    if(!link) {;
        title: "Cannot share";,""
        "description": "Please generate a referral code first",")"
      return}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    ;
    let shareUrl = '';
    switch(platform) {;
      case 'twitter':;
        shareUrl = `"https": //twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`;
        break;
      case 'facebook':;
        shareUrl = `"https": //www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        break;
      case 'linkedin':;
        shareUrl = `"https": //www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;
        break}
    ;
    if(shareUrl && typeof window !== "undefined") {;
      window.open(shareUrl, '_blank')}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

    let shareUrl = '';
=======
    let shareUrl = ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    switch(platform) {;
      case 'twitter':;`;
        shareUrl = `"https": //twitter && twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`;"
        break;"
      case 'facebook':;`;
        shareUrl = `"https": //www && www.facebook.com/sharer/sharer && sharer.php?u=${encodeURIComponent(link)}`;"
      case 'linkedin':;`;
        shareUrl = `"https": //www && www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;"
        break}
    if(shareUrl && typeof window !== "undefined") {;""
      window && window.open(shareUrl, '_blank')}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }, [getReferralLink]); // Dependency;
  return {;
    referralCode,
    isLoading,
    stats,
    referrals,
    rewards,
    generateReferralCode,
    getReferralLink,
    copyReferralLink,
    shareOnSocialMedia,
    fetchReferralStats,
    fetchReferrals,
    fetchRewards,
<<<<<<< HEAD
<<<<<<< HEAD
import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console.error("Error in fetchReferralCode:",error);,} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user.id); .order('created_at',{ ascending: 'false' }); ; if(error) throw error; setReferrals(data || []);,} catch(error) {; console.error("Error fetching referrals:",error);,} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user.id); .order('created_at',{ ascending: 'false' }); ; if(error) throw error; setRewards(data || []);,} catch(error) {; console.error("Error fetching rewards:",error);,} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: 'referralsData',error: 'refError' } = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user.id); ; if(refError) throw refError; ; const { data: 'rewardsData',error: 'rewardsError' } = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData.length : 0; const pendingReferrals = referralsData ? referralsData.filter(r => r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData.filter(r => r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData.reduce((sum,item) => {; return sum + (item.amount || 0);,},0) : 0; ; setStats({; totalReferrals,; pendingReferrals,; completedReferrals,; totalRewards;,}); ;,} catch(error) {; console.error("Error fetching referral stats:",error);,} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise.all([fetchReferralCode(),; fetchReferralStats(),; fetchReferrals(),; fetchRewards(); ]).finally(() => setIsLoading(false));,} else {; setReferralCode(null); setStats({ totalReferrals: '0',pendingReferrals: '0',completedReferrals: '0',totalRewards: '0' }); setReferrals([]); setRewards([]); setIsLoading(false);,} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required",; description: "You need to be logged in to generate a referral code",; variant: "destructive",;,}); return;,} const { data,error } = await supabase.rpc('generate_referral_code',{; p_user_id: 'user.id ;',}); if(error) throw error; toast({; title: "Success!",; description: "Your referral code has been generated",; variant: "success",;,}); await fetchReferralCode(); ; ; return data;,} catch(error: any) {; console.error("Error generating referral code:",error); toast({; title: "Error generating code",; description: error.message || "There was a problem generating your referral code",; variant: "destructive",;,});,} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ; ; const baseUrl = typeof window !== "undefined" ? window.location.origin : ; return `${baseUrl}/?ref=${referralCode.code}`;,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator.clipboard) {; navigator.clipboard.writeText(link); toast({; title: "Copied!",; description: "Referral link copied to clipboard",; variant: "success",;,});,} else {; toast({; title: "Cannot copy link",; description: referralCode ? "Clipboard API not available." : "Please generate a referral code first",; variant: "destructive",;,});,} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share",; description: "Please generate a referral code first",; variant: "destructive",;,}); return;,} ; let shareUrl = ''; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break;,} ; if(shareUrl && typeof window !== "undefined") {; window.open(shareUrl,'_blank');,} },[getReferralLink]); return {; referralCode,; isLoading,; stats,; referrals,; rewards,; generateReferralCode,; getReferralLink,; copyReferralLink,; shareOnSocialMedia,; fetchReferralStats,; fetchReferrals,; fetchRewards,; fetchReferralCode,;,};,}
    fetchReferralCode,}}
>>>>>>> main
import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console.error("Error in fetchReferralCode:",error),} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setReferrals(data || []),} catch(error) {; console.error("Error fetching referrals:",error),} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setRewards(data || []),} catch(error) {; console.error("Error fetching rewards:",error),} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: referralsData,error: refError } = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user.id); ; if(refError) throw refError; ; const { data: rewardsData,error: rewardsError } = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData.length : 0; const pendingReferrals = referralsData ? referralsData.filter(r => r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData.filter(r => r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData.reduce((sum,item) => {; return sum + (item.amount || 0),},0) : 0; ; setStats({; totalReferrals,pendingReferrals,completedReferrals,totalRewards,}),} catch(error) {; console.error("Error fetching referral stats:",error),} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise.all([fetchReferralCode(),fetchReferralStats(),fetchReferrals(),fetchRewards()]).finally(() => setIsLoading(false)),} else {; setReferralCode(null); setStats({ totalReferrals: 0,pendingReferrals: 0,completedReferrals: 0,totalRewards: 0 }); setReferrals([]); setRewards([]); setIsLoading(false),} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required",description: "You need to be logged in to generate a referral code",variant: "destructive",,}); return,} const { data,error } = await supabase.rpc('generate_referral_code',{; p_user_id: user.id ,}); if(error) throw error; toast({; title: "Success!",description: "Your referral code has been generated",variant: "success",,}); await fetchReferralCode(); ; ; return data,} catch(error: any) {; console.error("Error generating referral code:",error); toast({; title: "Error generating code",description: error.message || "There was a problem generating your referral code",variant: "destructive",,}),} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ""; ; const baseUrl = typeof window !== "undefined" ? window.location.origin : ""; return `${baseUrl}/?ref=${referralCode.code}`,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator.clipboard) {; navigator.clipboard.writeText(link); toast({; title: "Copied!",description: "Referral link copied to clipboard",variant: "success",,}),} else {; toast({; title: "Cannot copy link",description: referralCode ? "Clipboard API not available." : "Please generate a referral code first",variant: "destructive",,}),} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share",description: "Please generate a referral code first",variant: "destructive",,}); return,} ; let shareUrl = ''; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break,} ; if(shareUrl && typeof window !== "undefined") {; window.open(shareUrl,'_blank'),} },[getReferralLink]); return {; referralCode,isLoading,stats,referrals,rewards,generateReferralCode,getReferralLink,copyReferralLink,shareOnSocialMedia,fetchReferralStats,fetchReferrals,fetchRewards,fetchReferralCode,,},}
>>>>>>> main
>>>>>>> origin/main
import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console.error("Error in fetchReferralCode:",error),} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setReferrals(data || []),} catch(error) {; console.error("Error fetching referrals:",error),} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setRewards(data || []),} catch(error) {; console.error("Error fetching rewards:",error),} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: referralsData,error: refError } = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user.id); ; if(refError) throw refError; ; const { data: rewardsData,error: rewardsError } = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData.length : 0; const pendingReferrals = referralsData ? referralsData.filter(r => r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData.filter(r => r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData.reduce((sum,item) => {; return sum + (item.amount || 0),},0) : 0; ; setStats({; totalReferrals,pendingReferrals,completedReferrals,totalRewards,}),} catch(error) {; console.error("Error fetching referral stats:",error),} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise.all([fetchReferralCode(),fetchReferralStats(),fetchReferrals(),fetchRewards()]).finally(() => setIsLoading(false)),} else {; setReferralCode(null); setStats({ totalReferrals: 0,pendingReferrals: 0,completedReferrals: 0,totalRewards: 0 }); setReferrals([]); setRewards([]); setIsLoading(false),} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required",description: "You need to be logged in to generate a referral code",variant: "destructive",,}); return,} const { data,error } = await supabase.rpc('generate_referral_code',{; p_user_id: user.id ,}); if(error) throw error; toast({; title: "Success!",description: "Your referral code has been generated",variant: "success",,}); await fetchReferralCode(); ; ; return data,} catch(error: any) {; console.error("Error generating referral code:",error); toast({; title: "Error generating code",description: error.message || "There was a problem generating your referral code",variant: "destructive",,}),} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ""; ; const baseUrl = typeof window !== "undefined" ? window.location.origin : ""; return `${baseUrl}/?ref=${referralCode.code}`,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator.clipboard) {; navigator.clipboard.writeText(link); toast({; title: "Copied!",description: "Referral link copied to clipboard",variant: "success",,}),} else {; toast({; title: "Cannot copy link",description: referralCode ? "Clipboard API not available." : "Please generate a referral code first",variant: "destructive",,}),} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share",description: "Please generate a referral code first",variant: "destructive",,}); return,} ; let shareUrl = ''; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break,} ; if(shareUrl && typeof window !== "undefined") {; window.open(shareUrl,'_blank'),} },[getReferralLink]); return {; referralCode,isLoading,stats,referrals,rewards,generateReferralCode,getReferralLink,copyReferralLink,shareOnSocialMedia,fetchReferralStats,fetchReferrals,fetchRewards,fetchReferralCode,,},}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
    fetchReferralCode,,
},
}`;
import { useState, useEffect, useCallback, toast } from 'lucide-react'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console && console.error("Error in fetchReferralCode: ";,error);,} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user && user.id); .order('created_at',{ ascending: 'false' ;}); ; if(error) throw error; setReferrals(data || []);,} catch(error) {; console && console.error("Error fetching referrals: ";,error);,} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user && user.id); .order('created_at',{ ascending: 'false' ;}); ; if(error) throw error; setRewards(data || []);,} catch(error) {; console && console.error("Error fetching rewards: ";,error);,} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: 'referralsData';,error: 'refError' ;} = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user && user.id); ; if(refError) throw refError; ; const { data: 'rewardsData';,error: 'rewardsError' ;} = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user && user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData && referralsData.length : 0; const pendingReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData && rewardsData.reduce((sum,item) => {; return sum + (item && item.amount || 0);,},0) : 0; ; setStats({; totalReferrals; pendingReferrals,; completedReferrals,; totalRewards;,}); ;,} catch(error) {; console && console.error("Error fetching referral stats: ";,error);,} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise && Promise.all([fetchReferralCode(),; fetchReferralStats(),; fetchReferrals(),; fetchRewards(); ]).finally(() => setIsLoading(false));,} else {; setReferralCode(null); setStats({ totalReferrals: '0';,pendingReferrals: '0';,completedReferrals: '0';,totalRewards: '0' ;}); setReferrals([]); setRewards([]); setIsLoading(false);,} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required";,; description: "You need to be logged in to generate a referral code";,; variant: "destructive";,;,}); return;,} const { data,error } = await supabase && supabase.rpc('generate_referral_code',{; p_user_id: 'user && user.id ;',}); if(error) throw error; toast({; title: "Success!";,; description: "Your referral code has been generated";,; variant: "success";,;,}); await fetchReferralCode(); ; ; return data;,} catch(error: any) {; console && console.error("Error generating referral code: ";,error); toast({; title: "Error generating code";,; description: error && error.message || "There was a problem generating your referral code";,; variant: "destructive";,;,});,} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ; ; const baseUrl = typeof window !== "undefined" ? window && window.location.origin : ; return `${baseUrl}/?ref=${referralCode && referralCode.code}`;,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator && navigator.clipboard) {; navigator && navigator.clipboard.writeText(link); toast({; title: "Copied!";,; description: "Referral link copied to clipboard";,; variant: "success";,;,});,} else {; toast({; title: "Cannot copy link";,; description: referralCode ? "Clipboard API not available." : "Please generate a referral code first";,; variant: "destructive";,;,});,} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share";,; description: "Please generate a referral code first";,; variant: "destructive";,;,}); return;,} ; let shareUrl = ; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break;,} ; if(shareUrl && typeof window !== "undefined") {; window && window.open(shareUrl,'_blank');,} },[getReferralLink]); return {; referralCode,; isLoading,; stats,; referrals,; rewards,; generateReferralCode,; getReferralLink,; copyReferralLink,; shareOnSocialMedia,; fetchReferralStats,; fetchReferrals,; fetchRewards,; fetchReferralCode,;,};,}
    fetchReferralCode,}}

<<<<<<< HEAD

import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console && console.error("Error in fetchReferralCode:",error),} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setReferrals(data || []),} catch(error) {; console && console.error("Error fetching referrals:",error),} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setRewards(data || []),} catch(error) {; console && console.error("Error fetching rewards:",error),} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: referralsData,error: refError } = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user && user.id); ; if(refError) throw refError; ; const { data: rewardsData,error: rewardsError } = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user && user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData && referralsData.length : 0; const pendingReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData && rewardsData.reduce((sum,item) => {; return sum + (item && item.amount || 0),},0) : 0; ; setStats({; totalReferrals,pendingReferrals,completedReferrals,totalRewards,}),} catch(error) {; console && console.error("Error fetching referral stats:",error),} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise && Promise.all([fetchReferralCode(),fetchReferralStats(),fetchReferrals(),fetchRewards()]).finally(() => setIsLoading(false)),} else {; setReferralCode(null); setStats({ totalReferrals: 0,pendingReferrals: 0,completedReferrals: 0,totalRewards: 0 }); setReferrals([]); setRewards([]); setIsLoading(false),} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required",description: "You need to be logged in to generate a referral code",variant: "destructive",,}); return,} const { data,error } = await supabase && supabase.rpc('generate_referral_code',{; p_user_id: user && user.id ,}); if(error) throw error; toast({; title: "Success!",description: "Your referral code has been generated",variant: "success",,}); await fetchReferralCode(); ; ; return data,} catch(error: any) {; console && console.error("Error generating referral code:",error); toast({; title: "Error generating code",description: error && error.message || "There was a problem generating your referral code",variant: "destructive",,}),} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ""; ; const baseUrl = typeof window !== "undefined" ? window && window.location.origin : ""; return `${baseUrl}/?ref=${referralCode && referralCode.code}`,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator && navigator.clipboard) {; navigator && navigator.clipboard.writeText(link); toast({; title: "Copied!",description: "Referral link copied to clipboard",variant: "success",,}),} else {; toast({; title: "Cannot copy link",description: referralCode ? "Clipboard API not available." : "Please generate a referral code first",variant: "destructive",,}),} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share",description: "Please generate a referral code first",variant: "destructive",,}); return,} ; let shareUrl = ''; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break,} ; if(shareUrl && typeof window !== "undefined") {; window && window.open(shareUrl,'_blank'),} },[getReferralLink]); return {; referralCode,isLoading,stats,referrals,rewards,generateReferralCode,getReferralLink,copyReferralLink,shareOnSocialMedia,fetchReferralStats,fetchReferrals,fetchRewards,fetchReferralCode,,},}
import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console && console.error("Error in fetchReferralCode:",error),} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setReferrals(data || []),} catch(error) {; console && console.error("Error fetching referrals:",error),} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setRewards(data || []),} catch(error) {; console && console.error("Error fetching rewards:",error),} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: referralsData,error: refError } = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user && user.id); ; if(refError) throw refError; ; const { data: rewardsData,error: rewardsError } = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user && user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData && referralsData.length : 0; const pendingReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData && rewardsData.reduce((sum,item) => {; return sum + (item && item.amount || 0),},0) : 0; ; setStats({; totalReferrals,pendingReferrals,completedReferrals,totalRewards,}),} catch(error) {; console && console.error("Error fetching referral stats:",error),} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise && Promise.all([fetchReferralCode(),fetchReferralStats(),fetchReferrals(),fetchRewards()]).finally(() => setIsLoading(false)),} else {; setReferralCode(null); setStats({ totalReferrals: 0,pendingReferrals: 0,completedReferrals: 0,totalRewards: 0 }); setReferrals([]); setRewards([]); setIsLoading(false),} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required",description: "You need to be logged in to generate a referral code",variant: "destructive",,}); return,} const { data,error } = await supabase && supabase.rpc('generate_referral_code',{; p_user_id: user && user.id ,}); if(error) throw error; toast({; title: "Success!",description: "Your referral code has been generated",variant: "success",,}); await fetchReferralCode(); ; ; return data,} catch(error: any) {; console && console.error("Error generating referral code:",error); toast({; title: "Error generating code",description: error && error.message || "There was a problem generating your referral code",variant: "destructive",,}),} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ""; ; const baseUrl = typeof window !== "undefined" ? window && window.location.origin : ""; return `${baseUrl}/?ref=${referralCode && referralCode.code}`,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator && navigator.clipboard) {; navigator && navigator.clipboard.writeText(link); toast({; title: "Copied!",description: "Referral link copied to clipboard",variant: "success",,}),} else {; toast({; title: "Cannot copy link",description: referralCode ? "Clipboard API not available." : "Please generate a referral code first",variant: "destructive",,}),} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share",description: "Please generate a referral code first",variant: "destructive",,}); return,} ; let shareUrl = ''; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break,} ; if(shareUrl && typeof window !== "undefined") {; window && window.open(shareUrl,'_blank'),} },[getReferralLink]); return {; referralCode,isLoading,stats,referrals,rewards,generateReferralCode,getReferralLink,copyReferralLink,shareOnSocialMedia,fetchReferralStats,fetchReferrals,fetchRewards,fetchReferralCode,,},}


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    fetchReferralCode,,
},
}
import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console && console.error("Error in fetchReferralCode:",error);,} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user && user.id); .order('created_at',{ ascending: 'false' }); ; if(error) throw error; setReferrals(data || []);,} catch(error) {; console && console.error("Error fetching referrals:",error);,} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user && user.id); .order('created_at',{ ascending: 'false' }); ; if(error) throw error; setRewards(data || []);,} catch(error) {; console && console.error("Error fetching rewards:",error);,} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: 'referralsData',error: 'refError' } = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user && user.id); ; if(refError) throw refError; ; const { data: 'rewardsData',error: 'rewardsError' } = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user && user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData && referralsData.length : 0; const pendingReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData && rewardsData.reduce((sum,item) => {; return sum + (item && item.amount || 0);,},0) : 0; ; setStats({; totalReferrals,; pendingReferrals,; completedReferrals,; totalRewards;,}); ;,} catch(error) {; console && console.error("Error fetching referral stats:",error);,} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise && Promise.all([fetchReferralCode(),; fetchReferralStats(),; fetchReferrals(),; fetchRewards(); ]).finally(() => setIsLoading(false));,} else {; setReferralCode(null); setStats({ totalReferrals: '0',pendingReferrals: '0',completedReferrals: '0',totalRewards: '0' }); setReferrals([]); setRewards([]); setIsLoading(false);,} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required",; description: "You need to be logged in to generate a referral code",; variant: "destructive",;,}); return;,} const { data,error } = await supabase && supabase.rpc('generate_referral_code',{; p_user_id: 'user && user.id ;',}); if(error) throw error; toast({; title: "Success!",; description: "Your referral code has been generated",; variant: "success",;,}); await fetchReferralCode(); ; ; return data;,} catch(error: any) {; console && console.error("Error generating referral code:",error); toast({; title: "Error generating code",; description: error && error.message || "There was a problem generating your referral code",; variant: "destructive",;,});,} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ; ; const baseUrl = typeof window !== "undefined" ? window && window.location.origin : ; return `${baseUrl}/?ref=${referralCode && referralCode.code}`;,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator && navigator.clipboard) {; navigator && navigator.clipboard.writeText(link); toast({; title: "Copied!",; description: "Referral link copied to clipboard",; variant: "success",;,});,} else {; toast({; title: "Cannot copy link",; description: referralCode ? "Clipboard API not available." : "Please generate a referral code first",; variant: "destructive",;,});,} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share",; description: "Please generate a referral code first",; variant: "destructive",;,}); return;,} ; let shareUrl = ''; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break;,} ; if(shareUrl && typeof window !== "undefined") {; window && window.open(shareUrl,'_blank');,} },[getReferralLink]); return {; referralCode,; isLoading,; stats,; referrals,; rewards,; generateReferralCode,; getReferralLink,; copyReferralLink,; shareOnSocialMedia,; fetchReferralStats,; fetchReferrals,; fetchRewards,; fetchReferralCode,;,};,}
    fetchReferralCode,}}

<<<<<<< HEAD
import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console && console.error("Error in fetchReferralCode:",error),} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setReferrals(data || []),} catch(error) {; console && console.error("Error fetching referrals:",error),} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setRewards(data || []),} catch(error) {; console && console.error("Error fetching rewards:",error),} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: referralsData,error: refError } = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user && user.id); ; if(refError) throw refError; ; const { data: rewardsData,error: rewardsError } = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user && user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData && referralsData.length : 0; const pendingReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData && rewardsData.reduce((sum,item) => {; return sum + (item && item.amount || 0),},0) : 0; ; setStats({; totalReferrals,pendingReferrals,completedReferrals,totalRewards,}),} catch(error) {; console && console.error("Error fetching referral stats:",error),} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise && Promise.all([fetchReferralCode(),fetchReferralStats(),fetchReferrals(),fetchRewards()]).finally(() => setIsLoading(false)),} else {; setReferralCode(null); setStats({ totalReferrals: 0,pendingReferrals: 0,completedReferrals: 0,totalRewards: 0 }); setReferrals([]); setRewards([]); setIsLoading(false),} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required",description: "You need to be logged in to generate a referral code",variant: "destructive",,}); return,} const { data,error } = await supabase && supabase.rpc('generate_referral_code',{; p_user_id: user && user.id ,}); if(error) throw error; toast({; title: "Success!",description: "Your referral code has been generated",variant: "success",,}); await fetchReferralCode(); ; ; return data,} catch(error: any) {; console && console.error("Error generating referral code:",error); toast({; title: "Error generating code",description: error && error.message || "There was a problem generating your referral code",variant: "destructive",,}),} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ""; ; const baseUrl = typeof window !== "undefined" ? window && window.location.origin : ""; return `${baseUrl}/?ref=${referralCode && referralCode.code}`,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator && navigator.clipboard) {; navigator && navigator.clipboard.writeText(link); toast({; title: "Copied!",description: "Referral link copied to clipboard",variant: "success",,}),} else {; toast({; title: "Cannot copy link",description: referralCode ? "Clipboard API not available." : "Please generate a referral code first",variant: "destructive",,}),} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share",description: "Please generate a referral code first",variant: "destructive",,}); return,} ; let shareUrl = ''; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break,} ; if(shareUrl && typeof window !== "undefined") {; window && window.open(shareUrl,'_blank'),} },[getReferralLink]); return {; referralCode,isLoading,stats,referrals,rewards,generateReferralCode,getReferralLink,copyReferralLink,shareOnSocialMedia,fetchReferralStats,fetchReferrals,fetchRewards,fetchReferralCode,,},}
import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console && console.error("Error in fetchReferralCode:",error),} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setReferrals(data || []),} catch(error) {; console && console.error("Error fetching referrals:",error),} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setRewards(data || []),} catch(error) {; console && console.error("Error fetching rewards:",error),} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: referralsData,error: refError } = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user && user.id); ; if(refError) throw refError; ; const { data: rewardsData,error: rewardsError } = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user && user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData && referralsData.length : 0; const pendingReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData && rewardsData.reduce((sum,item) => {; return sum + (item && item.amount || 0),},0) : 0; ; setStats({; totalReferrals,pendingReferrals,completedReferrals,totalRewards,}),} catch(error) {; console && console.error("Error fetching referral stats:",error),} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise && Promise.all([fetchReferralCode(),fetchReferralStats(),fetchReferrals(),fetchRewards()]).finally(() => setIsLoading(false)),} else {; setReferralCode(null); setStats({ totalReferrals: 0,pendingReferrals: 0,completedReferrals: 0,totalRewards: 0 }); setReferrals([]); setRewards([]); setIsLoading(false),} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required",description: "You need to be logged in to generate a referral code",variant: "destructive",,}); return,} const { data,error } = await supabase && supabase.rpc('generate_referral_code',{; p_user_id: user && user.id ,}); if(error) throw error; toast({; title: "Success!",description: "Your referral code has been generated",variant: "success",,}); await fetchReferralCode(); ; ; return data,} catch(error: any) {; console && console.error("Error generating referral code:",error); toast({; title: "Error generating code",description: error && error.message || "There was a problem generating your referral code",variant: "destructive",,}),} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ""; ; const baseUrl = typeof window !== "undefined" ? window && window.location.origin : ""; return `${baseUrl}/?ref=${referralCode && referralCode.code}`,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator && navigator.clipboard) {; navigator && navigator.clipboard.writeText(link); toast({; title: "Copied!",description: "Referral link copied to clipboard",variant: "success",,}),} else {; toast({; title: "Cannot copy link",description: referralCode ? "Clipboard API not available." : "Please generate a referral code first",variant: "destructive",,}),} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share",description: "Please generate a referral code first",variant: "destructive",,}); return,} ; let shareUrl = ''; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break,} ; if(shareUrl && typeof window !== "undefined") {; window && window.open(shareUrl,'_blank'),} },[getReferralLink]); return {; referralCode,isLoading,stats,referrals,rewards,generateReferralCode,getReferralLink,copyReferralLink,shareOnSocialMedia,fetchReferralStats,fetchReferrals,fetchRewards,fetchReferralCode,,},}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console && console.error("Error in fetchReferralCode:",error),} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setReferrals(data || []),} catch(error) {; console && console.error("Error fetching referrals:",error),} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setRewards(data || []),} catch(error) {; console && console.error("Error fetching rewards:",error),} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: referralsData,error: refError } = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user && user.id); ; if(refError) throw refError; ; const { data: rewardsData,error: rewardsError } = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user && user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData && referralsData.length : 0; const pendingReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData && rewardsData.reduce((sum,item) => {; return sum + (item && item.amount || 0),},0) : 0; ; setStats({; totalReferrals,pendingReferrals,completedReferrals,totalRewards,}),} catch(error) {; console && console.error("Error fetching referral stats:",error),} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise && Promise.all([fetchReferralCode(),fetchReferralStats(),fetchReferrals(),fetchRewards()]).finally(() => setIsLoading(false)),} else {; setReferralCode(null); setStats({ totalReferrals: 0,pendingReferrals: 0,completedReferrals: 0,totalRewards: 0 }); setReferrals([]); setRewards([]); setIsLoading(false),} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required",description: "You need to be logged in to generate a referral code",variant: "destructive",,}); return,} const { data,error } = await supabase && supabase.rpc('generate_referral_code',{; p_user_id: user && user.id ,}); if(error) throw error; toast({; title: "Success!",description: "Your referral code has been generated",variant: "success",,}); await fetchReferralCode(); ; ; return data,} catch(error: any) {; console && console.error("Error generating referral code:",error); toast({; title: "Error generating code",description: error && error.message || "There was a problem generating your referral code",variant: "destructive",,}),} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ""; ; const baseUrl = typeof window !== "undefined" ? window && window.location.origin : ""; return `${baseUrl}/?ref=${referralCode && referralCode.code}`,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator && navigator.clipboard) {; navigator && navigator.clipboard.writeText(link); toast({; title: "Copied!",description: "Referral link copied to clipboard",variant: "success",,}),} else {; toast({; title: "Cannot copy link",description: referralCode ? "Clipboard API not available." : "Please generate a referral code first",variant: "destructive",,}),} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share",description: "Please generate a referral code first",variant: "destructive",,}); return,} ; let shareUrl = ''; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break,} ; if(shareUrl && typeof window !== "undefined") {; window && window.open(shareUrl,'_blank'),} },[getReferralLink]); return {; referralCode,isLoading,stats,referrals,rewards,generateReferralCode,getReferralLink,copyReferralLink,shareOnSocialMedia,fetchReferralStats,fetchReferrals,fetchRewards,fetchReferralCode,,},}
import { useState,useEffect,useCallback } from 'react'; import { toast } from '@/hooks/use-toast'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console && console.error("Error in fetchReferralCode:",error),} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setReferrals(data || []),} catch(error) {; console && console.error("Error fetching referrals:",error),} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user && user.id); .order('created_at',{ ascending: false }); ; if(error) throw error; setRewards(data || []),} catch(error) {; console && console.error("Error fetching rewards:",error),} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: referralsData,error: refError } = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user && user.id); ; if(refError) throw refError; ; const { data: rewardsData,error: rewardsError } = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user && user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData && referralsData.length : 0; const pendingReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData && rewardsData.reduce((sum,item) => {; return sum + (item && item.amount || 0),},0) : 0; ; setStats({; totalReferrals,pendingReferrals,completedReferrals,totalRewards,}),} catch(error) {; console && console.error("Error fetching referral stats:",error),} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise && Promise.all([fetchReferralCode(),fetchReferralStats(),fetchReferrals(),fetchRewards()]).finally(() => setIsLoading(false)),} else {; setReferralCode(null); setStats({ totalReferrals: 0,pendingReferrals: 0,completedReferrals: 0,totalRewards: 0 }); setReferrals([]); setRewards([]); setIsLoading(false),} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required",description: "You need to be logged in to generate a referral code",variant: "destructive",,}); return,} const { data,error } = await supabase && supabase.rpc('generate_referral_code',{; p_user_id: user && user.id ,}); if(error) throw error; toast({; title: "Success!",description: "Your referral code has been generated",variant: "success",,}); await fetchReferralCode(); ; ; return data,} catch(error: any) {; console && console.error("Error generating referral code:",error); toast({; title: "Error generating code",description: error && error.message || "There was a problem generating your referral code",variant: "destructive",,}),} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ""; ; const baseUrl = typeof window !== "undefined" ? window && window.location.origin : ""; return `${baseUrl}/?ref=${referralCode && referralCode.code}`,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator && navigator.clipboard) {; navigator && navigator.clipboard.writeText(link); toast({; title: "Copied!",description: "Referral link copied to clipboard",variant: "success",,}),} else {; toast({; title: "Cannot copy link",description: referralCode ? "Clipboard API not available." : "Please generate a referral code first",variant: "destructive",,}),} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share",description: "Please generate a referral code first",variant: "destructive",,}); return,} ; let shareUrl = ''; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break,} ; if(shareUrl && typeof window !== "undefined") {; window && window.open(shareUrl,'_blank'),} },[getReferralLink]); return {; referralCode,isLoading,stats,referrals,rewards,generateReferralCode,getReferralLink,copyReferralLink,shareOnSocialMedia,fetchReferralStats,fetchReferrals,fetchRewards,fetchReferralCode,,},}


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
`;
import { useState, useEffect, useCallback, toast } from 'lucide-react'; export default function Page() {; setReferralCode(data || null)} catch(error) {; console && console.error("Error in fetchReferralCode: ";,error),} },[user?.id]); const fetchReferrals = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referrals'); .select('*'); .eq('referrer_id',user && user.id); .order('created_at',{ ascending: false ;}); ; if(error) throw error; setReferrals(data || []),} catch(error) {; console && console.error("Error fetching referrals: ";,error),} },[user?.id]); const fetchRewards = useCallback(async () => {; if(!user?.id) return; try {; const { data,error } = await supabase; .from('referral_rewards'); .select('*'); .eq('user_id',user && user.id); .order('created_at',{ ascending: false ;}); ; if(error) throw error; setRewards(data || []),} catch(error) {; console && console.error("Error fetching rewards: ";,error),} },[user?.id]); const fetchReferralStats = useCallback(async () => {; if(!user?.id) return; try {; const { data: referralsData;,error: refError ;} = await supabase; .from('referrals'); .select('id,status'); .eq('referrer_id',user && user.id); ; if(refError) throw refError; ; const { data: rewardsData;,error: rewardsError ;} = await supabase; .from('referral_rewards'); .select('amount'); .eq('user_id',user && user.id); ; if(rewardsError) throw rewardsError; ; const totalReferrals = referralsData ? referralsData && referralsData.length : 0; const pendingReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'pending').length : 0; const completedReferrals = referralsData ? referralsData && referralsData.filter(r => r && r.status === 'completed').length : 0; ; const totalRewards = rewardsData ? rewardsData && rewardsData.reduce((sum,item) => {; return sum + (item && item.amount || 0),},0) : 0; ; setStats({; totalReferrals,pendingReferrals,completedReferrals,totalRewards,}),} catch(error) {; console && console.error("Error fetching referral stats: ";,error),} },[user?.id]); useEffect(() => {},[]); if(user) {; setIsLoading(true); Promise && Promise.all([fetchReferralCode(),fetchReferralStats(),fetchReferrals(),fetchRewards()]).finally(() => setIsLoading(false)),} else {; setReferralCode(null); setStats({ totalReferrals: 0;,pendingReferrals: 0;,completedReferrals: 0;,totalRewards: 0 ;}); setReferrals([]); setRewards([]); setIsLoading(false),} },[user,fetchReferralCode,fetchReferralStats,fetchReferrals,fetchRewards]); const generateReferralCode = async () => {; try {; if(!user) {; toast({; title: "Authentication required";,description: "You need to be logged in to generate a referral code";,variant: "destructive";,,}); return,} const { data,error } = await supabase && supabase.rpc('generate_referral_code',{; p_user_id: user && user.id ;,}); if(error) throw error; toast({; title: "Success!";,description: "Your referral code has been generated";,variant: "success";,,}); await fetchReferralCode(); ; ; return data,} catch(error: any) {; console && console.error("Error generating referral code: ";,error); toast({; title: "Error generating code";,description: error && error.message || "There was a problem generating your referral code";,variant: "destructive";,,}),} }; const getReferralLink = useCallback(() => { if(!referralCode?.code) return ""; ; const baseUrl = typeof window !== "undefined" ? window && window.location.origin : ""; return `${baseUrl}/?ref=${referralCode && referralCode.code}`,},[referralCode?.code]); const copyReferralLink = useCallback(() => { const link = getReferralLink(); if(link && typeof navigator !== "undefined" && navigator && navigator.clipboard) {; navigator && navigator.clipboard.writeText(link); toast({; title: "Copied!";,description: "Referral link copied to clipboard";,variant: "success";,,}),} else {; toast({; title: "Cannot copy link";,description: referralCode ? "Clipboard API not available." : "Please generate a referral code first";,variant: "destructive";,,}),} },[getReferralLink,referralCode]); const shareOnSocialMedia = useCallback((platform: 'twitter' | 'facebook' | 'linkedin') => { const link = getReferralLink(); const text = "Join Zion AI marketplace for AI talent and opportunities!"; ; if(!link) {; toast({; title: "Cannot share";,description: "Please generate a referral code first";,variant: "destructive";,,}); return,} ; let shareUrl = ; ; switch(platform) {; case 'twitter':; shareUrl = `https: break; case 'facebook':; shareUrl = `https: break; case 'linkedin':; shareUrl = `https: break;,} ; if(shareUrl && typeof window !== "undefined") {; window && window.open(shareUrl,'_blank'),} },[getReferralLink]); return {; referralCode,isLoading,stats,referrals,rewards,generateReferralCode,getReferralLink,copyReferralLink,shareOnSocialMedia,fetchReferralStats,fetchReferrals,fetchRewards,fetchReferralCode,,},}`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
