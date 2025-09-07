<<<<<<< HEAD
import { useState, useEffect  } from 'react';'
import { useParams, useNavigate  } from 'react-router-dom';'
import { Header  } from '@/components/Header';'
import { Footer  } from '@/components/Footer';'
import { SEO  } from '@/components/SEO';'
import { VideoCallRoom  } from '@/components/video/VideoCallRoom';'
import { Button  } from '@/components/ui/button';'
import { toast } from 'sonner';'
import {useState, useEffect} from 'react';'
import {useParams, useNavigate} from 'react-router-dom';'
import {Header} from '@/components/Header';'
import {Footer} from '@/components/Footer';'
import {SEO} from '@/components/SEO';'
import {VideoCallRoom} from '@/components/video/VideoCallRoom';'
import {Button} from '@/components/ui/button';'
import {toast} from 'sonner';'
export default function VideoCall() {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect  } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { VideoCallRoom  } from '@/components/video/VideoCallRoom';
import { Button  } from '@/components/ui/button';
import { toast } from 'sonner';
<<<<<<< HEAD

import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {VideoCallRoom} from '@/components/video/VideoCallRoom';
import {Button} from '@/components/ui/button';
import {toast} from 'sonner';

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { VideoCallRoom } from "@/components/video/VideoCallRoom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function VideoCall() {
=======
<<<<<<< HEAD
export default function VideoCall() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { roomId } = useParams($2);
  const navigate = useNavigate($2);
  const [isJoining, setIsJoining] = useState($2);
  const [hasJoined, setHasJoined] = useState($2);
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
      isMuted: false}
  ]),

  const handleJoinCall = () => {
    setIsJoining($2);
    // Simulate connection delay
    setTimeout(() => {
      setHasJoined($2);
      setIsJoining($2);
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {VideoCallRoom} from '@/components/video/VideoCallRoom';
import {Button} from '@/components/ui/button';
import {toast} from 'sonner';
<<<<<<< HEAD
=======

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { VideoCallRoom } from "@/components/video/VideoCallRoom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function VideoCall() {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  // useParams is typed as `any` in this environment due to missing type`  // definitions, so avoid passing a type argument to prevent TS2347.
}
import {useState, useEffect} from 'react';'
import {use_params, use_navigate} from 'react-router-dom';'
import {Header} from '@/components / Header';'
import {Footer} from '@/components / Footer';'
import {SEO} from '@/components / SEO';'
import {VideoCallRoom} from '@/components / video / VideoCallRoom';'
import {Button} from '@/components / ui / button';'
import {toast} from 'sonner';    avatar?: string;'
<<<<<<< HEAD
=======
=======
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [participants, setParticipants] = useState<

      id: string;
      name: string;
      avatar?: string;
      isMuted?: boolean;
      isVideoEnabled?: boolean;
      isScreenSharing?: boolean;
      isHost?: boolean;
    }>

      name: "You",
      isVideoEnabled: true,
      isMuted: false,
    },
  ]);

  const navigate = useNavigate();
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean;
  }>>([]
    {}
      id: 'user-1''
      name: 'You'
      isVideoEnabled: true;
      isMuted: false;
    }

import { toast } from 'sonner',;
export default function VideoCall() { return null; }
=======
    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean;
  }>>([]
    {}
      id: 'user-1''
      name: 'You'
      isVideoEnabled: true;
      isMuted: false;
    }

import { toast } from 'sonner',;
export default function VideoCall() { return null; }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default /**
 * VideoCall - Function description
 */
function VideoCall() {
  // use_params is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { room_id } = use_params ();
  const navigate = use_navigate ();
  const [is_joining, setIsJoining] = useState (false);
  const [has_joined, setHasJoined] = useState (false);
  const [participants, set_participants] = useState < Array<{
    id: string,
    name: string,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    avatar?: string;
    is_muted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    is_host?: boolean;
  }>>([;
    {
<<<<<<< HEAD
export default function VideoCall() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { roomId } = useParams();

  const navigate = useNavigate();
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [participants, setParticipants] = useState<Array<{
    id: string
    name: string
    avatar?: string;
>>>>>>> origin/resolved-merge-conflicts
    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean
  }>>([
    {
      }
      'id': 'id','
    'name': 'You''
      'isVideoEnabled': true;
    'isMuted': false
    }
  ]);
import { useState, useEffect } from 'react';'
import { useParams, useNavigate } from 'react-router-dom';'
import { Header } from '@/components/Header',;'
import { Footer } from '@/components/Footer',;'
import { SEO } from '@/components/SEO',;'
import { VideoCallRoom } from '@/components/video/VideoCallRoom',;'
import { Button } from '@/components/ui/button',;'
import { toast } from 'sonner',;'
export default function VideoCall() {;
<<<<<<< HEAD
  // useParams is typed as `any` in this environment due to missing type;`  // definitions, so avoid passing a type argument to prevent TS2347.;
  }
=======
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
    'id': string,
    'name': string,
    avatar?: string,
isMuted?: boolean,
isVideoEnabled?: boolean,
isScreenSharing?: boolean,
isHost?: boolean
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    id: string,
    name: string,
    avatar?: string;
    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean;
>>>>>>> origin/resolved-merge-conflicts
  }>>([;
    {;
      }
      'id': 'user-1',;'
      'name': 'You',;'
      'isVideoEnabled': true,;
      'isMuted': false;
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD

    setIsJoining(true);
    // Simulate connection delay;
    setTimeout(() => {;
      setHasJoined(true);
      setIsJoining(false);
    setHasJoined(false);
    toast && toast.info("Call ended", {,
  description: "You have left the meeting";
    });

  const handleJoinCall = () => {

    setIsJoining(true),
    // Simulate connection delay;
    setTimeout(() => {}
      setHasJoined(true),
      setIsJoining(false),"
      toast.success("Call joined", {}`
        description: `You have joined meeting room ${roomId}`
      })
    }, 1500)

  ]);
  const handleJoinCall = () => {;
=======
<<<<<<< HEAD
  ]),

  const handleJoinCall = () => {
    setIsJoining(true),
    // Simulate connection delay
    setTimeout(() => {
      setHasJoined(true),
      setIsJoining(false),
>>>>>>> merged-prs-20250907-203621
      toast.success("Call joined", {
        description: `You have joined meeting room ${roomId}`
      })
    }, 1500)
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
=======

  ]);
  const handleJoinCall = () => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    setIsJoining(true);
    // Simulate connection delay;
    setTimeout(() => {;
      }
      setHasJoined(true);
      setIsJoining(false);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    setHasJoined(false);
    toast && toast.info('Call ended', {,'
  }
  'description': 'You have left the meeting';'
    });
  const handleJoinCall = () => {;
    }
    setIsJoining(true);
    // Simulate connection delay;
    setTimeout(() => {;
      }
      setHasJoined(true);
      setIsJoining(false);
<<<<<<< HEAD
      toast.success('Call joined', {'
        }
        'description': `You have joined meeting room ${roomId}`,`
      });
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast.success("Call joined", {
        description: `You have joined meeting room ${roomId}`,
      });

<<<<<<< HEAD
  const handleLeaveCall = () => {;

=======
=======
      toast && toast.success("Call joined", {;
        description: `You have joined meeting room ${roomId}`;
      });
    }, 1500);
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleLeaveCall = () => {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    setHasJoined(false);
    toast && toast.info("Call ended", {;
      description: "You have left the meeting";
    });
<<<<<<< HEAD

  }

  },

=======
<<<<<<< HEAD

  }

>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
  },

  const handleLeaveCall = () => {
<<<<<<< HEAD
    setHasJoined($2);
    toast.info($2);
=======
    setHasJoined(false),
    toast.info("Call ended", {
      description: "You have left the meeting"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }),
    


<<<<<<< HEAD
    });
    }),
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    // Navigate back after a short delay
    setTimeout(() => {
      navigate(-1)
    }, 1500)
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Navigate back after a short delay;
    setTimeout(() => {;

      description: "You have left the meeting",
    });

    // Navigate back after a short delay
    setTimeout(() => {

      navigate(-1);
    }, 1500);
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
  };
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const simulateUserJoining = () => {;
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = [;
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },;
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },;
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
    ];
<<<<<<< HEAD
    const randomUser = mockUsers[Math && Math.floor(Math && Math.random() * mockUsers && mockUsers.length)];
    if (!participants && participants.find(p => p && p.id === randomUser && randomUser.id)) {;
=======

    const randomUser = mockUsers[Math && Math.floor(Math && Math.random() * mockUsers && mockUsers.length)];

    if (!participants && participants.find(p => p && p.id === randomUser && randomUser.id)) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      setParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser && randomUser.name} joined the call`);
    }
  }
<<<<<<< HEAD

  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [

      { id: "user-2", name: "Alex Chen", isVideoEnabled: true, isMuted: false },
      {"
        id: "user-3","

        name: "Taylor Kim",
        isVideoEnabled: false,
        isMuted: true,
      },

        name: "Jordan Smith",
        isVideoEnabled: true,
        isMuted: false,
        isScreenSharing: true,
      },
    ];

    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];

      toast(`${randomUser.name} joined the call`);
    }
  };
=======
<<<<<<< HEAD

  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
=======
<<<<<<< HEAD

  }
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false }
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true }
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ];
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    if (!participants.find(p => p.id === randomUser.id)) {
      setParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`)
    }
  }
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/resolved-merge-conflicts
  },
  
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false},
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true},
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true}
    ],
    
    const randomUser = $2;
    if (!participants.find(p => p.id === randomUser.id)) {
      setParticipants($2);
      toast(`${randomUser.name} joined the call`)
    }
  },
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  return (
    <>
<<<<<<< HEAD
      <SEO title={`Video Call - Room ${roomId}`} description='Zion video call' />
      <Header />
      <main className='container mx-auto py-8 min-h-[calc(100vh-200px)]'>
        {!hasJoined ? (
          <div className='flex flex-col items-center justify-center h-96 bg-zion-blue-dark/30 rounded-lg p-8'>
            <h1 className='text-3xl font-bold mb-6 text-white'>Join Video Call</h1>
            <p className='text-zion-slate-light mb-8'>Room ID: {roomId}</p>
            <Button
              onClick={handleJoinCall}
              disabled={isJoining}
              size='lg'
              className='bg-zion-purple hover:bg-zion-purple-light'
            >
              {isJoining ? 'Connecting...' : 'Join Call'}
            </Button>
          </div>
        ) : (
          <div className='space-y-4'>
            <VideoCallRoom
    }, 1500)
};

  const handleLeaveCall = () => {;
    }
    setHasJoined(false);
    toast && toast.info('Call ended', {,'
  }
  'description': 'You have left the meeting';'
    });
=======
      <SEO;`
        title={`Video Call - Room ${roomId}`}"
        description="Zion video call"
      />
      <Header />"
      <main className="container mx-auto py-8 min-h-[calc(100vh-200px)]">
        {!hasJoined ? ("
          <div className="flex flex-col items-center justify-center h-96 bg-zion-blue-dark/30 rounded-lg p-8">"
            <h1 className="text-3xl font-bold mb-6 text-white">
              Join Video Call;
            </h1>"
            <p className="text-zion-slate-light mb-8">Room ID: {roomId}</p>
            <Button;
              onClick={handleJoinCall}
              disabled={isJoining}"
              size="lg""
              className="bg-zion-purple hover:bg-zion-purple-light">;"
              {isJoining ? "Connecting..." : "Join Call"}
            </Button>
          </div>
        ) : ("
          <div className="space-y-4">
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <VideoCallRoom 
              roomId={roomId || ''} 

              roomId={roomId || ""}

              participants={participants}
              onLeave={handleLeaveCall}
            />
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
            </Button>;
          </div>;
        ) : (;
          <div className="space-y-4">;
            <VideoCallRoom
              roomId={roomId || ''} 
              participants={participants}
              onLeave={handleLeaveCall} 
            />;
            <p className="text-zion-slate-light mb-8">Room ID:{roomId}</p>;
            <Button ;
              onClick={handleJoinCall} ;
              disabled={isJoining}
              size="lg";
              className="bg-zion-purple hover:bg-zion-purple-light";
            >;
              {isJoining ? "Connecting..." :"Join Call"}
            </Button>;
          </div>;
        ) :(;
          <div className="space-y-4">;
            <VideoCallRoom ;
              roomId={roomId || ''} ;              participants={participants}
              onLeave={handleLeaveCall} ;
            />;
            ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            {/* This button is just for demo/testing purposes */}
            <div className='flex justify-center mt-4'>'
              <Button,
variant='outline';'
                onClick={simulateUserJoining}
                className='text-sm''
              >
<<<<<<< HEAD
=======
                Simulate user joining (demo only)
              </Button>
            </div>
          </div>
        )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
      </main>;
      <Footer />;
    </>;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </main>;
      <Footer />;
    </>;

});

}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      id: 'user - 1',

      name: 'You',
      isVideoEnabled: true,
      is_muted: false;
    }
  ]);
;

  const handleLeaveCall = () =>: any {
    setHasJoined (false);
    toast.info ("Call ended", {
      description: "You have left the meeting";
    });

    id: string,
    name: string,
    avatar?: string;

    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean;
  }>>([;

    <>
      <SEO;`;
        title={`Video Call - Room ${roomId}`}"
        description="Zion video call""
      />

      <Header />
)]"
      <main className="container mx-auto py-8 min-h-[calc(100vh-200px)]">"
</main>"
          <div className="flex flex-col items-center justify-center h-96 bg-zion-blue-dark/30 rounded-lg p-8">"
</div>"
            <h1 className="text-3xl font-bold mb-6 text-white">"
</h1>
            </h1>"
            <p className="text-zion-slate-light mb-8">Room ID: {roomId}</p>"
            <Button;
              onClick={handleJoinCall}
              disabled={isJoining}"
              size="lg"""
              className="bg-zion-purple hover:bg-zion-purple-light">;"

          <div className="space-y-4">"
</div>
            <VideoCallRoom;"
              roomId={roomId || ""}"
              participants={participants}
              onLeave={handleLeaveCall}
"
            <div className="flex justify-center mt-4">"
              <Button;"
                variant="outline""
                onClick={simulateUserJoining}"
                className="text-sm""
              >

      </main>
      <Footer />

    </>
  );
}
      id: 'user - 1',
      name: 'You',
      is_muted: false;
"
      id: 'user - 1',''
      name: 'You','

      isVideoEnabled: true,
      is_muted: false;
    }
  ]);
;

;
  const handleLeaveCall = () =>: any {
  // TODO: Implement
    setHasJoined (false);
    toast.info ("Call ended", {""
      description: "You have left the meeting";")
    });
    // Navigate back after a short delay;
    set_timeout (() => {
      navigate (-1);
    }, 1500);
  const simulateUserJoining = () =>: any {
  // TODO: Implement
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mock_users = [;"
      { id: 'user - 2', name: 'Alex Chen', isVideoEnabled: true, is_muted: false },
      { id: 'user - 3', name: 'Taylor Kim', isVideoEnabled: false, is_muted: true },
      { id: 'user - 4', name: 'Jordan Smith', isVideoEnabled: true, is_muted: false, isScreenSharing: true }']
    ];
    const random_user = mock_users[Math.floor (Math.random () * mock_users.length)];
    if () {) {
  $2;
      set_participants (prev => [...prev, random_user]);`;
      toast (`${random_user.name} joined the call`);
  return (
    <>;`;
      <SEO title={`Video Call - Room ${room_id}`} description="Zion video call" />;"

      <Header />;
)"
      <main className="container mx - auto py - 8 min - h-[calc (100vh - 200px)]">;"
          <div className="flex flex - col items - center justify - center h - 96 bg - zion - blue - dark / 30 rounded - lg p - 8">;"
            <h1 className="text - 3xl font - bold mb - 6 text - white">Join Video Call</h1>;""
            <p className="text - zion - slate - light mb - 8">Room ID: {room_id}</p>;"
              on_click={handleJoinCall}
              disabled={is_joining}"
              size="lg";""
              className="bg - zion - purple hover:bg - zion - purple - light";"
            >;

          </div>) : ("
          <div className="space - y-4">;"
              room_id={room_id || }
              on_leave={handleLeaveCall}
            />;

            <div className="flex justify - center mt - 4">;"
              <Button variant="outline" on_click={simulateUserJoining} className="text - sm">;"

            </div>;)
          </div>)}
      </main>;
      <Footer />;

    </>);
<<<<<<< HEAD

),; roomId 
=======
<<<<<<< HEAD

),; roomId 
=======
  ),; roomId 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}` 
}) 
}, 1500) 
};
//Navigate back after a short delay setTimeout ( () => {
  navigate (-1) 
}, 1500) 
};
const simulateUserJoining = () => {
  //This is just for demo purposes - in a real app, this would be handled by the video call service const mockUsers = [ {
  id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false 
};
{
  id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true 
};
{
  id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true 
}];
const randomUser = mockUsers[Math.floor (Math.random () * mockUsers.length) ];
if (!participants.find (p => p.id === randomUser.id) ) {
  setParticipants (prev => [...prev, randomUser]);
toast (`$ {
  randomUser.name 
}joined the call`) 
}
;

<<<<<<< HEAD
;

=======
<<<<<<< HEAD
;

=======

;

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
};
return (<> </Button> </div>) : (<div className="space-y-4" > <VideoCallRoom roomId= {
  roomId || '' 
}participants= {
  participants 
}onLeave= {
  handleLeaveCall 
}/> Simulate user joining (demo only) </Button> </div> </div>) 
}</main> <Footer /> </>) 
}
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <VideoCallRoom
>>>>>>> origin/resolved-merge-conflicts
              roomId={roomId |''}
              participants={participants}
              onLeave={handleLeaveCall}
            />
            {/* This button is just for demo/testing purposes */}
            <div className='flex justify-center mt-4'>
              <Button variant='outline' onClick={simulateUserJoining} className='text-sm'>
                Simulate user joining (demo only)
              </Button>
            </div>
          </div>
        )}
      </main>;
      <Footer />;
    </>;  );
}
      'id': 'user - 1','
      'name': 'You','
      'isVideoEnabled': true,
      'is_muted': false;
    }
  ]);
;
;
      </main>
      <Footer />
    </>
  )
}
<<<<<<< HEAD
=======
      </main>;
      <Footer />;
    </>;
  );
}
;
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
