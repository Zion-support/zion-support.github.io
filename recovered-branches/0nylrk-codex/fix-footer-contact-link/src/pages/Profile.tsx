import React, { useEffect } from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
export default function Profile() {;
import React, { useEffect } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function Profile() {
  const { user, isLoading, logout } = useAuth();
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",
export default function Profile() {
  const { user, isLoading, logout } = useAuth(),
  const navigate = useNavigate(),

  const { user, isLoading, logout } = useAuth();

    return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="animate-pulse text-white">Loading profile...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (!user) {;
    return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-md">
            <h1 className="text-xl font-bold text-white mb-4">Please log in</h1>
            <p className="text-zion-slate mb-4">
              You need to be logged in to view your profile.
            </p>
            <Button
              onClick={() => navigate("/login?redirect=/profile")}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
            >;
              Go to Login;
            </Button>;
          </div>;
        </div>;
        <Footer />;
      </>;

    );
  }
  return (
                    navigate("/")                  }}
                  variant="outline"
                  className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )import React, { useEffect } from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { useNavigate } from "react-router-dom",;

import { toast } from "sonner",;

  const { user, isLoading, logout } = useAuth(),;
  const navigate = useNavigate(),;
  useEffect(() => {;
    if (!isLoading && !user) {;
      toast.error("Please log in to view your profile"),;
      navigate("/login?redirect=/profile");
