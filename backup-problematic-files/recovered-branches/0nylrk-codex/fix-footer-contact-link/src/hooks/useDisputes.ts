
    }
  },;
;
  const updateDisputeStatus = async (disputeId:string, status:DisputeStatus):Promise<boolean> => {;
    try {;
      const { error } = await supabase;
        .from("disputes");
        .update({ status });
        .eq("id", disputeId),;
      ;
      if (error) throw error,;
      ;
      // Update local state;
      setDisputes(prevDisputes => ;
        prevDisputes.map(dispute => ;
          dispute.id === disputeId ? { ...dispute, status } dispute;
        );
      ),;
      ;
      toast.success(`Dispute status updated to ${status}`),;
      return true,;
    } catch (err:any) {;
      console.error("Error updating dispute status:", err),;
      toast.error("Failed to update dispute status"),;
      return false,;
    }

}