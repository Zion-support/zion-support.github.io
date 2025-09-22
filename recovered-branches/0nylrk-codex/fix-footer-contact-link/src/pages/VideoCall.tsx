<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState, useEffect  } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { VideoCallRoom  } from '@/components/video/VideoCallRoom';
import { Button  } from '@/components/ui/button';
import { toast } from 'sonner';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {VideoCallRoom} from '@/components/video/VideoCallRoom';
import {Button} from '@/components/ui/button';
import {toast} from 'sonner';

=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
import {useState, useEffect} from 'react';
import {use_params, use_navigate} from 'react-router-dom';
import {Header} from '@/components / Header';
import {Footer} from '@/components / Footer';
import {SEO} from '@/components / SEO';
import {VideoCallRoom} from '@/components / video / VideoCallRoom';
import {Button} from '@/components / ui / button';
import {toast} from 'sonner';    avatar?: string;
=======
import { useState, useEffect } from "react";"
import { useParams, useNavigate } from "react-router-dom";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { SEO } from "@/components/SEO";"
import { VideoCallRoom } from "@/components/video/VideoCallRoom";"
import { Button } from "@/components/ui/button";"
import { toast } from "sonner";
export default function VideoCall() {};
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.
=======
export default function VideoCall() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [participants, setParticipants] = useState<
Array<{}
      id: string;
      name: string;
      avatar?: string;
      isMuted?: boolean;
      isVideoEnabled?: boolean;
      isScreenSharing?: boolean;
      isHost?: boolean;
    }>
>([]
    {"
      id: "user-1","
      name: "You",
      isVideoEnabled: true,
      isMuted: false,
    },
  ]);

  const navigate = useNavigate();
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
const [participants, setParticipants] = useState<Array<{}
    id: string;
    name: string;
    avatar?: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
]);
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
import { toast } from 'sonner',;
export default function VideoCall() { return null; }
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

    id: string,
    name: string,
    avatar?: string;
    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean;
  }>>([;
    {;'
      id: 'user-1',;'
      name: 'You',;
      isVideoEnabled: true,;
      isMuted: false;
    }

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const handleJoinCall = () => {
=======
  const handleJoinCall = () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
    setIsJoining(true);
    // Simulate connection delay;
    setTimeout(() => {;
      setHasJoined(true);
      setIsJoining(false);
      toast.success("Call joined", {
        description: `You have joined meeting room ${roomId}`,
      });
<<<<<<< HEAD
    }, 1500)
};

  const handleLeaveCall = () => {;

    setHasJoined(false);
    toast && toast.info("Call ended", {;
      description: "You have left the meeting";
    });
<<<<<<< HEAD
<<<<<<< HEAD

  }

  },

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Navigate back after a short delay
    setTimeout(() => {
      navigate(-1)
    }, 1500)
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Navigate back after a short delay;
    setTimeout(() => {;
      description: "You have left the meeting",
    });

    // Navigate back after a short delay
    setTimeout(() => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser && randomUser.name} joined the call`);
    }
  }
const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: "user-2", name: "Alex Chen", isVideoEnabled: true, isMuted: false },
      {"
        id: "user-3","
=======
      navigate(-1);
    }, 1500);
  };

  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: "user-2", name: "Alex Chen", isVideoEnabled: true, isMuted: false },
      {
        id: "user-3",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        name: "Taylor Kim",
        isVideoEnabled: false,
        isMuted: true,
      },
{"
        id: "user-4","
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
      toast(`${randomUser.name} joined the call`);
    }
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  return (
    <>
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
<<<<<<< HEAD

            <VideoCallRoom 
              roomId={roomId || ''} 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              roomId={roomId || ""}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
    if (!participants.find((p) => p.id === randomUser.id)) {
      setParticipants((prev) => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  };

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
            <VideoCallRoom
              roomId={roomId || ""}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              participants={participants}
              onLeave={handleLeaveCall}
            />
=======

import { useState, useEffect  } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { VideoCallRoom  } from '@/components/video/VideoCallRoom';
import { Button  } from '@/components/ui/button';
import { toast } from 'sonner';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            {/* This button is just for demo/testing purposes */}
=======
            {/* This button is just for demo/testing purposes */}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <div className="flex justify-center mt-4">
              <Button"
                variant="outline"
                onClick={simulateUserJoining}"
                className="text-sm"
              >
                Simulate user joining (demo only)
              </Button>
            </div>
          </div>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
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

      </main>;
      <Footer />;
    </>;
);
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
=======
      </main>;
      <Footer />;
    </>;  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </main>;
      <Footer />;
    </>;  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      </main>
      <Footer />
    </>
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

      id: 'user - 1',
=======
'
      id: 'user - 1','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      name: 'You',
      isVideoEnabled: true,
      is_muted: false;
    }
  ]);
;
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
}

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

"`;
pr-12325
"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
