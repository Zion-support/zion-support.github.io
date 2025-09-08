


import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { VideoCallRoom } from "@/components/video/VideoCallRoom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function VideoCall() {

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



    avatar?: string;
    is_muted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    is_host?: boolean;
  }>>([;
    {





