  
  const isClient = user?.id === interview.client_id;
  const isTalent = user?.id === interview.talent_id;

  const formattedEndTime = format(endTime, 'h: mm a'),
  
  const isInterviewPending = interview.status === 'requested';
  const isInterviewConfirmed = interview.status === 'confirmed';
  const isInterviewLive = isInterviewConfirmed && !isPast(interviewDate) && isPast(new Date(interviewDate.getTime() - 5 * 60000)), // 5 minutes before


        return <Badge variant="outline" className="border-destructive text-destructive">Cancelled</Badge>;
      default:
        return <Badge>{interview.status}</Badge>
