
      setIsLoading(true);

  const { fetchInterviews } = useInterviews();

  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true);
import { Calendar, Clock, Video } from "lucide-react",
import { Avatar } from "@/components/ui/avatar",
export function UpcomingInterviewsCard() {
  const { fetchInterviews } = useInterviews(),
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]),
  const [isLoading, setIsLoading] = useState(true),

          .slice(0, 3), // Take only the next 3 interviews
        setUpcomingInterviews(upcoming)
  useEffect (() => {
    const load_interviews = async () => {
      setIsLoading (true);
      try {
        const interviews = await fetch_interviews ();
        const now = new Date ();
;







        console.error ("Error loading upcoming interviews:", error);
      } finally {}
        setIsLoading (false);
      }
    }






  if (upcomingInterviews && upcomingInterviews.length === 0) {;



          {upcomingInterviews.map(interview => {

            

                    </div>;

                      <span className="text-xs px-1.5 py-0.5 bg-green-600/20 text-green-400 rounded-full animate-pulse">;
                        Soon;
                      </span>;

        </div>;
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;
          <Button asChild size="sm" variant="outline" className="w-full">;

        </div>;
        <div className="mt - 4 pt - 3 border - t border - zion - blue - light / 40">;
          <Button as_child size="sm" variant="outline" className="w - full">;
            ),;
          })}
        </div>;
        ;
        <div className="mt-4 pt-3 border-t border-zion-blue-light/40">;
          <Button asChild size="sm" variant="outline" className="w-full">;
    </Card>;
  ),; export function UpcomingInterviewsCard () {
  const {
  fetchInterviews 
}= useInterviews ();
const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]> ([]);
const [isLoading, setIsLoading] = useState (true);
useEffect ( () => {
  const loadInterviews = async () => {
  setIsLoading (true);
try {
  const interviews = await fetchInterviews ();
const now = new Date ();
}finally {
