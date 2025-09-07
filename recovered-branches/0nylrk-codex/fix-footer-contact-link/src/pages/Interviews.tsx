
function InterviewsContent() {
  }
  const { interviews, isLoading, fetchInterviews } = useInterviews();
  const [activeTab, setActiveTab] = useState("upcoming");"
import { Calendar, Clock, Video } from "lucide-react","
import { format, isAfter, parseISO, startOfDay } from "date-fns","
function InterviewsContent() {
}
const { interviews, isLoading, fetchInterviews } = useInterviews(),;
const [activeTab, setActiveTab] = useState("upcoming"),;"
  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type
}
const loadInterviews = async () => {
      }
      await fetchInterviews()
    }
    loadInterviews()
  }, []);
  // Filter interviews based on status and date,
const now = new Date();
  const today = startOfDay(now);
const upcomingInterviews = interviews;
    .filter((interview) => {

      }
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd');'
      if (!grouped[dateKey]) {
        }
        grouped[dateKey] = []
return Object.entries(groupedInterviews);
      .sort(([dateA], [dateB]) =>
        parseISO(dateA).getTime() - parseISO(dateB).getTime()
      )
      .map(([date, interviews]) => (

                  {upcomingInterviews.length}
                </span>
              )}
            </TabsTrigger>

              </div>
            ) : upcomingInterviews.length > 0 ? (
              }
              renderInterviewGroups(upcomingGrouped)
            ) : (

              </div>
            ) : pendingInterviews.length > 0 ? (
              }
              renderInterviewGroups(pendingGrouped)
            ) : (

              </div>
            ) : pastInterviews.length > 0 ? (
              }
              renderInterviewGroups(pastGrouped)
            ) : (

              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  )
}
export default function Interviews() {
  return (
    <ProtectedRoute>
      <InterviewsContent />
    </ProtectedRoute>
  )
    </>);
}
export default /**
 * Interviews - Function description
 */
function Interviews() {
}
return (;
    <ProtectedRoute>;
      <InterviewsContent />;
    </ProtectedRoute>);
}
}
