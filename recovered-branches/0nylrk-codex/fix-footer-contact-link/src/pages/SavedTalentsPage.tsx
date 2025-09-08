






          // Extract talent profiles and convert to TalentProfile type
          const talentProfiles = data.map(
            item => item.talent_profile as unknown as TalentProfile


              is_verified;
            );
          `;

          );

          .eq("user_id", user && user.id);

}
          // Extract talent profiles and convert to TalentProfile type;
          const talent_profiles = data.map (
            item => item.talent_profile as unknown as TalentProfile);
          setSavedTalents (talent_profiles);
        }



        console.error ("Error fetching saved talents:", error);
        toast ({"
          title: "Error","
          description: "Failed to load saved talents. Please try again later.","
          variant: "destructive"});



    },


    fetchSavedTalents()
  }, [user]);
  const handleViewProfile = (talentId: string) => {}`
    navigate(`/talent/${talentId}`)

  },


  },




          .eq('talent_id', talentId);
        if (error) {
          throw error
        }



          throw error;

        }
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );


        toast({
          title: "Talent Removed"
          description: "Talent removed from saved list."})
      } else {
        // Add to saved talents
        const { error } = await supabase
          .from('saved_talents')
          .insert([{ user_id: user.id, talent_id: talentId }])
        if (error) {
          throw error
        }
        // Fetch the updated talent profile and add it to the list
        const { data: talentData, error: talentError } = await supabase
          .from('talent_profiles')
          .select('*')
          .eq('id', talentId)




          .single(),
  


        if (talentError) {
          console.error("Error fetching talent profile:", talentError);


          toast({
            title: "Error"
            description: "Failed to update saved talents. Please try again later."
            variant: "destructive"})
          return

        }



    }
  };

  },;
;

      />;

      <AppHeader />;

      <div className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>;
        <p className="text-muted-foreground">;
          Here are the talents you've saved for future reference.;
        </p>;



                key={talent.id}
                talent={talent}
        ;
        {isLoading ? (;
          <div className="text-center py-8">Loading saved talents...</div>;
        ) :savedTalents.length === 0 ? (;
          <div className="text-center py-8">No talents saved yet.</div>;
        ) :(;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;
            {savedTalents.map((talent) => (;
              <TalentCard;
                key={talent.id}                talent={talent}





