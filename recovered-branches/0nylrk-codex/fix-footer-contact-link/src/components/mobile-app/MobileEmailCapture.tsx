

    try {
      // In a real implementation, this would connect to a backend service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setIsSuccess(true),
      setEmail(""),
      

            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-zion-blue-dark/70 text-white border-zion-purple/30 placeholder:text-gray-400"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting |isSuccess}
              className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium"
            >
              {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  )
}

},
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
export const MobileEmailCapture: React.FC = () => {;
      // In a real implementation, this would connect to a backend service;
      // For now, we'll simulate a successful submission;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      setIsSuccess(true),;
    } catch (error) {;
      console.error("Error subscribing:", error);
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;




};
    </section>);
}

;


