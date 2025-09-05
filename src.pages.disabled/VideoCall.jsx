<<<<<<< HEAD
const { roomId } = useParams () const navigate = useNavigate () const [isJoining,setIsJoining] = useState (false) const [hasJoined,setHasJoined] = useState (false) const [isVideoEnabled,setIsVideoEnabled] = useState (true) const [isMuted,setIsMuted] = useState (false) const [isScreenSharing,setIsScreenSharing] = useState (false) const [participants,setParticipants] = useState ([{ \"id\": \'user: - 1,\',\"name\": \'You,\',\"isVideoEnabled\": \'tru\',e,\"isMuted\": \'fals\',e,\"isScreenSharing\": \'fals\',e}]) const handleJoinCall = () => { setIsJoining (true) \';\"";
=======
import React from 'react';

interface VideoCallProps {
  // Add props here as needed
}

export default function VideoCall({ }: VideoCallProps) {
  return (
    <div>
      <h1>VideoCall</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
>>>>>>> main
