

  const recordMilestoneActivity = async (
    milestoneId: string,
    action: string,
    previousStatus: string | null,
    newStatus: string,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
        .insert({

=======

          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          comment})
        .select(`
          *;
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)

<<<<<<< HEAD
      return data
    } catch (err: any) {
      console && console.error("Error recording activity:", err);
      return null

    }

  }
    }

  };
  return {;
    recordMilestoneActivity;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
