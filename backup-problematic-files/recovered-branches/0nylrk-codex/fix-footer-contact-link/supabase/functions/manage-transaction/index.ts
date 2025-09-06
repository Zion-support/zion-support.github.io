
    }
;
    // Get transaction details;
    const { data:transaction, error:fetchError } = await supabaseAdmin;
      .from("transactions");
      .select("*");
      .eq("id", transactionId);
      .single(),;
    ;
    if (fetchError || !transaction) {;
      throw new Error("Transaction not found"),;
    }

