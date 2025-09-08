import { useState, useEffect  } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { VideoCallRoom  } from '@/components/video/VideoCallRoom';
import { Button  } from '@/components/ui/button';
import { toast } from 'sonner';
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {VideoCallRoom} from '@/components/video/VideoCallRoom';
import {Button} from '@/components/ui/button';
import {toast} from 'sonner';
export default function VideoCall() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
import {useState, useEffect} from 'react';
import {use_params, use_navigate} from 'react-router-dom';
import {Header} from '@/components / Header';
import {Footer} from '@/components / Footer';
import {SEO} from '@/components / SEO';
import {VideoCallRoom} from '@/components / video / VideoCallRoom';
import {Button} from '@/components / ui / button';
import {toast} from 'sonner';    avatar?: string;
    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean
  }>>([
    {
      id: 'user-1'
      name: 'You'
      isVideoEnabled: true
      isMuted: false
    }
  ]);
import { useState, useEffect } from 'react',;
import { useParams, useNavigate } from 'react-router-dom',;
import { Header } from '@/components/Header',;
import { Footer } from '@/components/Footer',;
import { SEO } from '@/components/SEO',;
import { VideoCallRoom } from '@/components/video/VideoCallRoom',;
import { Button } from '@/components/ui/button',;
import { toast } from 'sonner',;
export default function VideoCall() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { roomId } = useParams(),;
  const navigate = useNavigate(),;
  const [isJoining, setIsJoining] = useState(false),;
  const [hasJoined, setHasJoined] = useState(false),;
  const [participants, setParticipants] = useState<Array<{;
    }
    'id': string,;
    'name': string,;
    avatar?: string,;
    isMuted?: boolean,;
    isVideoEnabled?: boolean,;
    isScreenSharing?: boolean,;
    isHost?: boolean;
>>>>>>> origin/cursor/delete-old-data-records-6bba


    id: string,
    name: string,
    avatar?: string;
    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean;
  }>>([;
    {;
      }
      'id': 'user-1',;'
      'name': 'You',;'
      'isVideoEnabled': true,;
      'isMuted': false;
    }

    setIsJoining(true);
    // Simulate connection delay;
    setTimeout(() => {;
      setHasJoined(true);
      setIsJoining(false);
    setHasJoined(false);
    toast && toast.info("Call ended", {,
  description: "You have left the meeting";
    });


=======
      toast.success("Call joined", {
        description: `You have joined meeting room ${roomId}`
      })
    }, 1500)

  ]);
  const handleJoinCall = () => {;
    setIsJoining(true);
    // Simulate connection delay;
    setTimeout(() => {;
      }
      setHasJoined(true);
      setIsJoining(false);
      toast.success("Call joined", {
        description: `You have joined meeting room ${roomId}`,
      });
    }, 1500)
};

  const handleLeaveCall = () => {;
    setHasJoined(false);
    toast && toast.info("Call ended", {,
  description: "You have left the meeting";
    });
            {/* This button is just for demo/testing purposes */}
            <div className='flex justify-center mt-4'>'
              <Button,
variant='outline';'
                onClick={simulateUserJoining}
                className='text-sm''
              >
                Simulate user joining (demo only)
              </Button>
            </div>
          </div>
        )}
      </main>;
      <Footer />;
    </>;  );
}

      id: 'user - 1',

      name: 'You',
      isVideoEnabled: true,
      is_muted: false;
    }
  ]);
;
;