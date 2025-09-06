

import { useState, useEffect  } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { VideoCallRoom  } from '@/components/video/VideoCallRoom';
import { Button  } from '@/components/ui/button';
import { toast } from 'sonner';

export default function VideoCall() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { roomId } = useParams();

  const navigate = null;

  return (
    <>
      <SEO title={`Video Call - Room ${roomId}`} description="Zion video call" />
      <Header />
      <main className="container mx-auto py-8 min-h-[calc(100vh-200px)]">
        {!hasJoined ? (
          <div className="flex flex-col items-center justify-center h-96 bg-zion-blue-dark/30 rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-white">Join Video Call</h1>
            <p className="text-zion-slate-light mb-8">Room ID: {roomId}</p>
            <Button 
              onClick={handleJoinCall} 
              disabled={isJoining}
              size="lg"
              className="bg-zion-purple hover:bg-zion-purple-light"
            >
              {isJoining ? "Connecting..." : "Join Call"}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <VideoCallRoom 
              roomId={roomId || ''} 
              participants={participants}
              onLeave={handleLeaveCall} 
            />
            
            {/* This button is just for demo/testing purposes */}
            <div className="flex justify-center mt-4">
              <Button variant="outline" onClick={simulateUserJoining} className="text-sm">
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
;