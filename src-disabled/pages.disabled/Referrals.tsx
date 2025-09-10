

        <div>
          <h1 className='text-3xl font-bold tracking-tight'>
            Referral Program
          </h1>
          <p className='text-muted-foreground mt-1'>

            Invite others to Zion AI Marketplace and earn rewards
          </p>
        </div>
        <Button className='flex items-center gap-2' onClick={copyReferralLink}>
          <Share className='h-4 w-4' />          Share Referral Link    <div className="container max-w-7xl py-10">
    shareOnSocialMedia} = useReferrals(),

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please login to access the referral program",
        variant: "destructive"}),
      router.push("/login"), // Changed to router.push
    }
  }, [isAuthenticated, router]); // Changed navigate to router in dependencies
  const referralLink = getReferralLink()
          <Share className='h-4 w-4' />          Share Referral Link    <div className="container max-w-7xl py-10">
    shareOnSocialMedia} = useReferrals(),

  const referralLink = getReferralLink(),

  return (
    <div className="container max-w-7xl py-10">
ursor/fix-website-loading-errors-and-merge-6662
      <div className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>
          <p className="text-muted-foreground mt-1">

            Invite others to Zion AI Marketplace and earn rewards
          </p>
        </div>
        <Button className='flex items-center gap-2' onClick={copyReferralLink}>





        <div className='space-y-6'>          <ReferralGuide />        <div className="space-y-6">

        <div className='space-y-6'>          <ReferralGuide />        <div className="space-y-6">
ursor/fix-website-loading-errors-and-merge-6662

        <div className="space-y-6">
          <ReferralGuide />










