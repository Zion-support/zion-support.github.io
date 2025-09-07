
    } finally {
      }
      setIsLoading (false);
    }
  }

        }
      }));
      setDisputes(transformedData as Dispute[]);
      setError(null)

            scope_summary;
            job_id;
            client_id;
            talent_id;
      })),
      
      setDisputes(transformedData as Dispute[]),
      setError(null)

    }
    try {

            scope_summary,
            job_id,
            client_id,
            talent_id,
            "job":jobs(title)
          ),

        .single(),
      if (error) throw error,

  ): Promise < boolean> => {
    }
    try {
      }
      const { error } = await supabase;

      // Update local state;
      setDisputes(prevDisputes =>;
        prevDisputes.map(dispute =>;
          dispute.id === disputeId ? { ...dispute, status } : dispute;
        );

      return false;
    }
  },
  const resolveDispute = async (;

  ): Promise<boolean> => {
    }
    try {

    }
  const getDisputeMessages = async ("disputeId": string): Promise<DisputeMessage[]> => {
    }
    try {

  },
  const getDisputeMessages = async ("disputeId": string): Promise<DisputeMessage[]> => {    try {
      }
      const { data, error } = await supabase;

    }
    if (!user) {
      }
      toast && toast.error("You must be logged in to send a message");"
  const addDisputeMessage = async ("disputeId": string, "message": string, isAdminNote = false): Promise<boolean> => {
    }
    if (!user) {
      }
      toast && toast.error("You must be logged in to send a message");"
return false;
    }
    try {

      // Update local state;
      setDisputes(prevDisputes =>;
        prevDisputes.map(dispute =>;
          dispute.id === disputeId;

      return false;
    }
  },
  // Fetch disputes when component mounts or user changes;

    resolveDispute;
    getDisputeMessages;
    addDisputeMessage;
        .insert($2);
      if (error) throw error,
      
      toast.success($2);
      return true
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      return false
    }
  },

  // Fetch disputes when component mounts or user changes
  useEffect(() => {
    if (user) {
      fetchDisputes()
    }
  }, [user]),

  return {
    disputes;
    isLoading;
    error;
    refetch: fetchDisputes;
    getDisputeById;
    createDispute;
    updateDisputeStatus;
    resolveDispute;
    getDisputeMessages

    addDisputeMessage
  }
}
  }
}
  }
}  }
}  }
}
