<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useEffect  } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { VideoCallRoom  } from '@/components/video/VideoCallRoom';
import { Button  } from '@/components/ui/button';
import { toast } from 'sonner';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { VideoCallRoom } from "@/components/video/VideoCallRoom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export default function VideoCall() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [participants, setParticipants] = useState<
    Array<{
      id: string;
      name: string;
      avatar?: string;
      isMuted?: boolean;
      isVideoEnabled?: boolean;
      isScreenSharing?: boolean;
      isHost?: boolean;
    }>
  >([
    {
      id: "user-1",
      name: "You",
      isVideoEnabled: true,
      isMuted: false,
    },
  ]);

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
      id: 'user-1'
      name: 'You'
      isVideoEnabled: true
      isMuted: false
    }
  ]);
<<<<<<< HEAD

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

=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    id: string,
    name: string,
    avatar?: string
    isMuted?: boolean
    isVideoEnabled?: boolean
    isScreenSharing?: boolean
    isHost?: boolean
  }>>([;
    {;
      id: 'user-1',;
      name: 'You',;
      isVideoEnabled: true,;
      isMuted: false;
    }
<<<<<<< HEAD


=======
  ]),
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    setIsJoining(true);
    // Simulate connection delay;
    setTimeout(() => {;
      setHasJoined(true);
      setIsJoining(false);
    setHasJoined(false);
    toast && toast.info("Call ended", {;
      description: "You have left the meeting";
    });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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


  ]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleJoinCall = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setIsJoining(true);
    // Simulate connection delay;
    setTimeout(() => {;
      setHasJoined(true);
      setIsJoining(false);
      toast.success("Call joined", {
        description: `You have joined meeting room ${roomId}`,
      });
    }, 1500);
  };
<<<<<<< HEAD

  const handleLeaveCall = () => {;

=======
  const handleLeaveCall = () => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    setHasJoined(false);
    toast && toast.info("Call ended", {;
      description: "You have left the meeting";
    });
<<<<<<< HEAD


=======
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  const handleLeaveCall = () => {
    setHasJoined(false),
    toast.info("Call ended", {
<<<<<<< HEAD
      description: "You have left the meeting"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Navigate back after a short delay
    setTimeout(() => {
      navigate(-1)
    }, 1500)
<<<<<<< HEAD

  ]),;
  const handleJoinCall = () => {;
    setIsJoining(true),;
    // Simulate connection delay;
    setTimeout(() => {;
      setHasJoined(true),;
      setIsJoining(false),;
      toast.success("Call joined", {;
        description: `You have joined meeting room ${roomId}`;
      });
    }, 1500);
  },;
  const handleLeaveCall = () => {;
    setHasJoined(false),;
    toast.info("Call ended", {;
      description: "You have left the meeting";
    }),;
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Navigate back after a short delay;
    setTimeout(() => {;
=======
      description: "You have left the meeting",
    });

    // Navigate back after a short delay
    setTimeout(() => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      navigate(-1);
    }, 1500);
<<<<<<< HEAD
  },;
=======
  };

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const simulateUserJoining = () => {;
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = [;
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },;
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },;
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
<<<<<<< HEAD
    ],;
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)],;
    if (!participants.find(p => p.id === randomUser.id)) {;
      setParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    ];
<<<<<<< HEAD

    const randomUser = mockUsers[Math && Math.floor(Math && Math.random() * mockUsers && mockUsers.length)];

    if (!participants && participants.find(p => p && p.id === randomUser && randomUser.id)) {;

=======
    const randomUser = mockUsers[Math && Math.floor(Math && Math.random() * mockUsers && mockUsers.length)];
    if (!participants && participants.find(p => p && p.id === randomUser && randomUser.id)) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser && randomUser.name} joined the call`);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: "user-2", name: "Alex Chen", isVideoEnabled: true, isMuted: false },
      {
        id: "user-3",
        name: "Taylor Kim",
        isVideoEnabled: false,
        isMuted: true,
      },
      {
        id: "user-4",
        name: "Jordan Smith",
        isVideoEnabled: true,
        isMuted: false,
        isScreenSharing: true,
      },
    ];

    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    if (!participants.find((p) => p.id === randomUser.id)) {
      setParticipants((prev) => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  return (
    <>
      <SEO
        title={`Video Call - Room ${roomId}`}
        description="Zion video call"
      />
      <Header />
      <main className="container mx-auto py-8 min-h-[calc(100vh-200px)]">
        {!hasJoined ? (
          <div className="flex flex-col items-center justify-center h-96 bg-zion-blue-dark/30 rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-white">
              Join Video Call
            </h1>
            <p className="text-zion-slate-light mb-8">Room ID: {roomId}</p>
            <Button
              onClick={handleJoinCall}
              disabled={isJoining}
              size="lg"
              className="bg-zion-purple hover:bg-zion-purple-light">;
              {isJoining ? "Connecting..." : "Join Call"}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


            <VideoCallRoom 
              roomId={roomId || ''} 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
            <VideoCallRoom
              roomId={roomId || ""}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              participants={participants}
              onLeave={handleLeaveCall}
            />

            {/* This button is just for demo/testing purposes */}
            <div className="flex justify-center mt-4">
              <Button
                variant="outline"
                onClick={simulateUserJoining}
                className="text-sm"
              >
                Simulate user joining (demo only)
              </Button>
            </div>
          </div>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


      </main>;
      <Footer />;
    </>;
<<<<<<< HEAD
  );
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      </main>;
      <Footer />;
    </>;
=======
      </main>
      <Footer />
    </>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      id: 'user - 1',
      name: 'You',
      isVideoEnabled: true,
      is_muted: false;
    }
  ]);
;
;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
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
}

=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
