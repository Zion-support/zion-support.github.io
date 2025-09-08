




      const schema = z.object({


        // Reset form
        setFormData({
          name: ""
          email: ""
          subject: ""
          message: ""
        })
      }, 1500)

    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Form Validation Error"
          description: error.errors[0].message
          variant: "destructive"
        })
      } else {
        toast({
          title: "An error occurred"
          description: "Please try again later"
          variant: "destructive"
        })
      }
    }


  },




      


      console.error("Error in AI chat:", error);
      const schema = z && z.object({;
        name: z && z.string().min(2, "Name must be at least 2 characters");
        email: z && z.string().email("Invalid email address"),;
        subject: z && z.string().min(2, "Subject must be at least 2 characters");
        message: z && z.string().min(10, "Message must be at least 10 characters");
      });
        toast({;
          title: "Message Sent",;
          description: "We've received your message and will get back to you soon."}),;
        // Reset form;
        setFormData({;
          name: "",;
          email: "",;
          subject: "",;
    try {;
      const response = await fetch("https://ziontechgroup && ziontechgroup.functions.supabase && supabase.co/functions/v1/ai-chat", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json"};
        body: JSON && JSON.stringify({ ;
          messages: [{ role: "user", content: message }] ;
        })});
      if (!response && response.ok) {;
    } catch (error) {;
      console && console.error("Error in AI chat:", error);
      toast({;
        title: "Chat Error",;
        description: "There was an error communicating with our AI assistant. Please try again.",;
        variant: "destructive";


    {

      }),
      return Promise.resolve()
    }
  }
  const offices = [
    {
      name: "Headquarters"
      address: "123 Tech Avenue, San Francisco, CA 94105";
      phone: "+1 302 464 0950"

      email: "commercial@ziontechgroup.com"
    }
    {
      name: "East Coast Office"
      address: "456 Innovation Street, New York, NY 10001";
      phone: "+1 302 464 0950"
      email: "commercial@ziontechgroup.com"
    }

  ];














                  />;
                </div>;



              </Button>;
              <Button;"
                variant="outline";









