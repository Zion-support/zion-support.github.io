

<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { VideoCallRoom  } from '@/components/video/VideoCallRoom';
import { Button  } from '@/components/ui/button';
import { toast } from 'sonner';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {VideoCallRoom} from '@/components/video/VideoCallRoom';
import {Button} from '@/components/ui/button';
import {toast} from 'sonner';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export default function VideoCall() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
import {useState, useEffect} from 'react';
import {use_params, use_navigate} from 'react-router-dom';
import {Header} from '@/components / Header';
import {Footer} from '@/components / Footer';
import {SEO} from '@/components / SEO';
import {VideoCallRoom} from '@/components / video / VideoCallRoom';
import {Button} from '@/components / ui / button';
import {toast} from 'sonner';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    avatar?: string;
    is_muted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    is_host?: boolean;
  }>>([;
    {
<<<<<<< HEAD
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
    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean
  }>>([
    {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    id: string,;
    name: string,;
    avatar?: string,;
    isMuted?: boolean,;
    isVideoEnabled?: boolean,;
    isScreenSharing?: boolean,;
    isHost?: boolean;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    id: string,
    name: string,
    avatar?: string
    isMuted?: boolean
    isVideoEnabled?: boolean
    isScreenSharing?: boolean
    isHost?: boolean
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }>>([;
    {;
      id: 'user-1',;
      name: 'You',;
      isVideoEnabled: true,;
      isMuted: false;
    }
<<<<<<< HEAD
<<<<<<< HEAD
  ]),
=======


  const handleJoinCall = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setIsJoining(true);
    // Simulate connection delay;
    setTimeout(() => {;
      setHasJoined(true);
      setIsJoining(false);

      toast && toast.success("Call joined", {;
        description: `You have joined meeting room ${roomId}`;
      });
    }, 1500);
  };

  const handleLeaveCall = () => {;

    setHasJoined(false);
    toast && toast.info("Call ended", {;
      description: "You have left the meeting";
    });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleJoinCall = () => {
    setIsJoining(true),
    // Simulate connection delay
    setTimeout(() => {
      setHasJoined(true),
      setIsJoining(false),
      toast.success("Call joined", {
        description: `You have joined meeting room ${roomId}`
      })
    }, 1500)
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  ]);
  const handleJoinCall = () => {;
    setIsJoining(true);
    // Simulate connection delay;
    setTimeout(() => {;
      setHasJoined(true);
      setIsJoining(false);
      toast && toast.success("Call joined", {;
        description: `You have joined meeting room ${roomId}`;
      });
    }, 1500);
  };
  const handleLeaveCall = () => {;
    setHasJoined(false);
    toast && toast.info("Call ended", {;
      description: "You have left the meeting";
    });
  }
  },

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleLeaveCall = () => {
    setHasJoined(false),
    toast.info("Call ended", {
      description: "You have left the meeting"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }),
    


<<<<<<< HEAD
    });
    }),
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    });
    }),
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Navigate back after a short delay
    setTimeout(() => {
      navigate(-1)
    }, 1500)
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Navigate back after a short delay;
    setTimeout(() => {;
      navigate(-1);
    }, 1500);
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const simulateUserJoining = () => {;
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = [;
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },;
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },;
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ];
<<<<<<< HEAD
    const randomUser = mockUsers[Math && Math.floor(Math && Math.random() * mockUsers && mockUsers.length)];
    if (!participants && participants.find(p => p && p.id === randomUser && randomUser.id)) {;
=======

    const randomUser = mockUsers[Math && Math.floor(Math && Math.random() * mockUsers && mockUsers.length)];

    if (!participants && participants.find(p => p && p.id === randomUser && randomUser.id)) {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser && randomUser.name} joined the call`);
    }
  }
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false }
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true }
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ];
<<<<<<< HEAD
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    if (!participants.find(p => p.id === randomUser.id)) {
      setParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`)
    }
  }
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    const randomUser = mockUsers[Math && Math.floor(Math && Math.random() * mockUsers && mockUsers.length)];

    if (!participants && participants.find(p => p && p.id === randomUser && randomUser.id)) {;

      setParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser && randomUser.name} joined the call`);
    }
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },
<<<<<<< HEAD
<<<<<<< HEAD
  return (

import { useState, useEffect } from 'react',;
import { useParams, useNavigate } from 'react-router-dom',;
import { Header } from '@/components/Header',;
import { Footer } from '@/components/Footer',;
import { SEO } from '@/components/SEO',;
import { VideoCallRoom } from '@/components/video/VideoCallRoom',;
import { Button } from '@/components/ui/button',;
import { toast } from 'sonner',;
;
export default function VideoCall() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { roomId } = useParams(),;
  const navigate = useNavigate(),;
  const [isJoining, setIsJoining] = useState(false),;
  const [hasJoined, setHasJoined] = useState(false),;
  const [participants, setParticipants] = useState<Array<{;
    id:string,;
    name:string,;
    avatar?:string,;
    isMuted?:boolean,;
    isVideoEnabled?:boolean,;
    isScreenSharing?:boolean,;
    isHost?:boolean;
  }>>([;
    {;
      id:'user-1',;
      name:'You',;
      isVideoEnabled:true,;
      isMuted:false;
    }
  ]),;
;
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ];
    
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    
    if (!participants.find(p => p.id === randomUser.id)) {
      setParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`)
    }
  };
  ]),;
  const handleJoinCall = () => {;
    setIsJoining(true),;
    // Simulate connection delay;
    setTimeout(() => {;
      setHasJoined(true),;
      setIsJoining(false),;
      toast.success("Call joined", {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

    <>;
      <SEO title={`Video Call - Room ${roomId}`} description="Zion video call" />;
      <Header />;
      <main className="container mx-auto py-8 min-h-[calc(100vh-200px)]">;
        {!hasJoined ? (;
          <div className="flex flex-col items-center justify-center h-96 bg-zion-blue-dark/30 rounded-lg p-8">;
            <h1 className="text-3xl font-bold mb-6 text-white">Join Video Call</h1>;
            <p className="text-zion-slate-light mb-8">Room ID: {roomId}</p>;
            <Button
              onClick={handleJoinCall} 

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              disabled={isJoining}
              size="lg"
              className="bg-zion-purple hover:bg-zion-purple-light">;
              {isJoining ? "Connecting..." : "Join Call"}
<<<<<<< HEAD
<<<<<<< HEAD
        description: `You have joined meeting room ${roomId}`;
      });
    }, 1500);
  },;
  const handleLeaveCall = () => {;
    setHasJoined(false),;
    toast.info("Call ended", {;
      description: "You have left the meeting";
    }),;
    // Navigate back after a short delay;
    setTimeout(() => {;
      navigate(-1);
    }, 1500);
  },;
  const simulateUserJoining = () => {;
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = [;
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },;
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },;
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ],;
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)],;
    if (!participants.find(p => p.id === randomUser.id)) {;
      setParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  },

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


            <VideoCallRoom 
              roomId={roomId || ''} 


              participants={participants}
              onLeave={handleLeaveCall}
            />
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
            {/* This button is just for demo/testing purposes */}
            <div className="flex justify-center mt-4">;
              <Button variant="outline" onClick={simulateUserJoining} className="text-sm">;
                Simulate user joining (demo only);
              </Button>;
            </div>;
          </div>;
        )}


<<<<<<< HEAD
      </main>;
      <Footer />;
    </>;
=======

=======
            <VideoCallRoom
              roomId={roomId |''}
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

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </main>;
      <Footer />;
    </>;
  );
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: 'user - 1',
      name: 'You',
      isVideoEnabled: true,
      is_muted: false;
    }
  ]);
;
  const handleJoinCall = () =>: any {
    setIsJoining (true);
    // Simulate connection delay;
    set_timeout (() => {
      setHasJoined (true);
      setIsJoining (false);
      toast.success ("Call joined", {
        description: `You have joined meeting room ${room_id}`;
      });
    }, 1500);
  }
;
  const handleLeaveCall = () =>: any {
    setHasJoined (false);
    toast.info ("Call ended", {
      description: "You have left the meeting";
    });
;
    // Navigate back after a short delay;
    set_timeout (() => {
      navigate (-1);
    }, 1500);
  }
;
  const simulateUserJoining = () =>: any {
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mock_users = [;
      { id: 'user - 2', name: 'Alex Chen', isVideoEnabled: true, is_muted: false },
      { id: 'user - 3', name: 'Taylor Kim', isVideoEnabled: false, is_muted: true },
      { id: 'user - 4', name: 'Jordan Smith', isVideoEnabled: true, is_muted: false, isScreenSharing: true }
    ];
;
    const random_user = mock_users[Math.floor (Math.random () * mock_users.length)];
;
    if () {) {
  $2
}
      set_participants (prev => [...prev, random_user]);
      toast (`${random_user.name} joined the call`);
    }
  }
;
  return (
    <>;
      <SEO title={`Video Call - Room ${room_id}`} description="Zion video call" />;
      <Header />;
      <main className="container mx - auto py - 8 min - h-[calc (100vh - 200px)]">;
        {!has_joined ? (
          <div className="flex flex - col items - center justify - center h - 96 bg - zion - blue - dark / 30 rounded - lg p - 8">;
            <h1 className="text - 3xl font - bold mb - 6 text - white">Join Video Call</h1>;
            <p className="text - zion - slate - light mb - 8">Room ID: {room_id}</p>;
            <Button;
              on_click={handleJoinCall}
              disabled={is_joining}
              size="lg";
              className="bg - zion - purple hover:bg - zion - purple - light";
            >;
              {is_joining ? "Connecting..." : "Join Call"}
            </Button>;
          </div>) : (
          <div className="space - y-4">;
            <VideoCallRoom;
              room_id={room_id || ''}
              participants={participants}
              on_leave={handleLeaveCall}
            />;
            {/* This button is just for demo / testing purposes */}
            <div className="flex justify - center mt - 4">;
              <Button variant="outline" on_click={simulateUserJoining} className="text - sm">;
                Simulate user joining (demo only);
              </Button>;
            </div>;
          </div>)}
      </main>;
      <Footer />;
    </>);
<<<<<<< HEAD
  ),; roomId 
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


;

<<<<<<< HEAD
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
            <VideoCallRoom
              roomId={roomId |''}
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
      </main>;
      <Footer />;
    </>;
  );
}
;
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}

=======
;

=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
