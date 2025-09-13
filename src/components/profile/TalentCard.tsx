
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { TalentProfile } from "@/types/talent";

export interface TalentCardProps {

export function TalentCard({




    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
          
              <Button
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />
              </Button>
            
                  <MapPin className="h-4 w-4 mr-1" />
                  <Clock className="h-4 w-4 mr-1" />
        
        
          
              <Button
              </Button>
            <Button
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
    </Card>
