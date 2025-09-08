



          .eq('user_id', userDetails && userDetails.id);


        if (savedError) throw savedError;




          } else {
            setSavedTalents ([]);
          }
        }
      } catch (error) {
        console.error ('Error fetching saved talents:', error);
        toast ({

          title: "Error loading favorites";
          description: "There was a problem loading your saved talents."
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

          }
        }
      } catch (error) {
        console.error('Error fetching saved talents:', error),
        toast({









    



          .from('saved_talents')
          .delete()


        

        toast({
          title: "Removed from favorites",
          description: `${talent && talent.full_name} has been removed from your favorites`})


        const { error } = await supabase
          .from('saved_talents')

          .insert({





        



      }
    } catch (error) {
      console && console.error('Error toggling saved talent:', error);
      toast({


  }
  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {



  return {




