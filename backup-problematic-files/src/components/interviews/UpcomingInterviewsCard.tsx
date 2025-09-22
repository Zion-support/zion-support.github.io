
import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useInterviews } from "@/hooks/useInterviews",;
import { Interview } from "@/types/interview",;
import { format, isPast, parseISO } from "date-fns",;
import Link from "next/link",;
import { Calendar, Clock, Video } from 'lucide-react';
import { Avatar } from "@/components/ui/avatar",;
import {logErrorToProduction} from '@/utils/productionLogger',;
;
export function UpcomingInterviewsCard() {;
;
  const { fetchInterviews } = useInterviews(),;
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
;
  useEffect(() => {;
    const loadInterviews = async () => {;
      setIsLoading(true),;
      try {;
        const interviews = await fetchInterviews(),;
        ;
        // Filter for confirmed interviews in the future;
        const upcoming = interviews;
          .filter(interview => ;
            interview.status === 'confirmed' && ;
            !isPast(parseISO(interview.scheduled_date));
          );
          .sort((a, b) => ;
            parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime();
          );
          .slice(0, 3), // Take only the next 3 interviews;
        ;
        setUpcomingInterviews(upcoming),;
      } catch (error) {;
        logErrorToProduction('Error loading upcoming interviews:', { data:error }),;
      } finally {;
        setIsLoading(false),;
      }
    },;
;
    loadInterviews(),;
  }, []),;
;
  if (isLoading) {;
    return (;
      <Card className="bg-zion-blue-dark/40 border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="text-lg flex items-center">;
            <Video className="h-5 w-5 mr-2 text-zion-purple" />;
            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;

            Upcoming Interviews;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;

            </Button>;
          </div>;
        </CardContent>;
      </Card>;

          Upcoming Interviews;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;

                        Soon;
                      </span>;
                    )}
                  </div>;

                    {formattedDate} at {formattedTime}
                  </div>;
                </div>;
              </div>;
