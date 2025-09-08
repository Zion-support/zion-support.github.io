                  }
          name: isUserOne ? conv.user_two_name : conv.user_one_name;
          avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar;

          last_message: conv.last_message ? {

            content: conv.last_message,
            created_at: conv.last_message_time;        }
      });
      setConversations(formattedConversations);
      // Calculate total unread count      }
      
      }
      
      }
      
      }
      // Send the initial message
      await supabase
        .from('messages')
        .insert({

          conversation_id: conversationId,
          sender_id: user.id,
          recipient_id: recipientId,
          content: initialMessage,
          created_at: new Date().toISOString(),
          read: false;
        }),
      
      // Update conversations list;
      await fetchConversations(),
      

      // Return the conversation ID
      return conversationId
    } catch (error) {
      console && console.error('Error creating conversation:', error);
      toast({

          read: false
        });
      // Update conversations list
      // Return the conversation ID
      return conversationId
    } catch (error) {
      console.error('Error creating conversation:', error),
      toast({}
