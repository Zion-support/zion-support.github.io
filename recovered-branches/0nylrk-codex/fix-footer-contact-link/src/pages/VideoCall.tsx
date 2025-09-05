
import { useState, useEffect } from 'react',
import { useParams, useNavigate } from 'react-router-dom',
import { Header } from '@/components/Header',
import { Footer } from '@/components/Footer',
import { SEO } from '@/components/SEO',
import { VideoCallRoom } from '@/components/video/VideoCallRoom',
import { Button } from '@/components/ui/button',
import { toast } from 'sonner',
export default function VideoCall() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { roomId } = useParams(),
  const navigate = useNavigate(),
  const [isJoining, setIsJoining] = useState(false),
  const [hasJoined, setHasJoined] = useState(false),
  const [participants, setParticipants] = useState<Array<{
    id: string,
    name: string,
    avatar?: string,
    isMuted?: boolean,
    isVideoEnabled?: boolean,
    isScreenSharing?: boolean,
    isHost?: boolean
  }>>([
    {
      id: 'user-1',
      name: 'You',
      isVideoEnabled: true,
      isMuted: false
    }
  ]),

  const handleJoinCall = () => {
    setIsJoining(true),
    // Simulate connection delay
    setTimeout(() => {
<<<<<<< HEAD
      setHasJoined(true),
      setIsJoining(false),
      toast.success("Call joined", {
=======
      setHasJoined(true);
      setIsJoining(false);
      toast.success(&quot;Call joined&quot;, {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        description: `You have joined meeting room ${roomId}`
      })
    }, 1500)
  },

  const handleLeaveCall = () => {
<<<<<<< HEAD
    setHasJoined(false),
    toast.info("Call ended", {
      description: "You have left the meeting"
    }),
=======
    setHasJoined(false);
    toast.info(&quot;Call ended&quot;, {
      description: &quot;You have left the meeting&quot;
    });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // Navigate back after a short delay
    setTimeout(() => {
      navigate(-1)
    }, 1500)
  },
  
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ],
    
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)],
    
    if (!participants.find(p => p.id === randomUser.id)) {
      setParticipants(prev => [...prev, randomUser]),
      toast(`${randomUser.name} joined the call`)
    }
  },

  return (
    <>
      <SEO title={`Video Call - Room ${roomId}`} description=&quot;Zion video call&quot; />
      <Header />
      <main className=&quot;container mx-auto py-8 min-h-[calc(100vh-200px)]&quot;>
        {!hasJoined ? (
          <div className=&quot;flex flex-col items-center justify-center h-96 bg-zion-blue-dark/30 rounded-lg p-8&quot;>
            <h1 className=&quot;text-3xl font-bold mb-6 text-white&quot;>Join Video Call</h1>
            <p className=&quot;text-zion-slate-light mb-8&quot;>Room ID: {roomId}</p>
            <Button 
              onClick={handleJoinCall} 
              disabled={isJoining}
              size=&quot;lg&quot;
              className=&quot;bg-zion-purple hover:bg-zion-purple-light&quot;
            >
              {isJoining ? &quot;Connecting...&quot; : &quot;Join Call&quot;}
            </Button>
          </div>
        ) : (
          <div className=&quot;space-y-4&quot;>
            <VideoCallRoom 
              roomId={roomId || ''} 
              participants={participants}
              onLeave={handleLeaveCall} 
            />
            
            {/* This button is just for demo/testing purposes */}
            <div className=&quot;flex justify-center mt-4&quot;>
              <Button variant=&quot;outline&quot; onClick={simulateUserJoining} className=&quot;text-sm&quot;>
                Simulate user joining (demo only)
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
