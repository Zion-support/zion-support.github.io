
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function Profile() {
  const { user, isLoading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      toast.error("Please log in to view your profile");
      navigate("/login?redirect=/profile");
    }
  }, [user, isLoading, navigate]);


                >;
                  Logout;
                </Button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;

;






