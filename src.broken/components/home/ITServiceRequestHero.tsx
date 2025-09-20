import React, { useState } from "react";
import Image from "next/image";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { Loader2 } from 'lucide-react'
import { useTranslation } from "react-i18next";
import {logErrorToProduction} from '@/utils/productionLogger';

  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async e: React.FormEvent {;    e.preventDefault();
    if(location.trim()) {

      setIsSubmitting(true);
      // Simulate API call
      setTimeout(: unknown {
        setIsSubmitting(false);
        router(`/it-onsite-services?location = ${encodeURIComponent(location)}`)}, 1000)}}}}}}}}}};

            "
            <div className="space-y-6">"
              <div className="flex items-center gap-4">"
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">"
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>"
                  <p className="text-gray-300 text-sm">Phone</p>"
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
              </div>
              "
              <div className="flex items-center gap-4">"
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">"
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>"
                  <p className="text-gray-300 text-sm">Email</p>"
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
              </div>
              "
              <div className="flex items-center gap-4">"
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">"
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>"
                  <p className="text-gray-300 text-sm">Address</p>"
                  <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              "
              <div className="flex items-center gap-4">"
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">"
                  <span className="text-white text-xl">🌐</span>
                </div>
                <div>"
                  <p className="text-gray-300 text-sm">Website</p>"
                  <p className="text-white font-semibold">ziontechgroup.com</p>
                </div>
              </div>
            </div>
"
            <div className="mt-8 text-center">"
              <p className="text-gray-400 text-sm mb-4">
                Available 24/7 for emergency support
              </p>"
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full">"
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>"
                <span className="text-green-400 text-sm font-semibold">Online Now</span>
              </div>
            </div>;
          </motion.div>;
        </div>;
      </div>;
    </section>;
  )}
'"`