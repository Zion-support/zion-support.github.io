  
  const isCompleted = project.status === "completed";
  const isClient = user?.id === project.client_id;
  const isTalent = user?.id === project.talent_id;
  
  const clientProfile = project?.talent_profile;
  const talentProfile = project.talent_profile;

    : clientProfile?.full_name || "Client";

  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview;
  const hasLeftReview = userReview != null;
  
