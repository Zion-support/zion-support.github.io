
import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video, VideoOff, Mic, MicOff, Phone, ScreenShare, ScreenShareOff, Volume2, VolumeX  } from '@/components/icons';
import './video-call.css';
interface Participant {
  id: string;
  name: string;
  avatar?: string;
  isMuted?: boolean;
  isVideoEnabled?: boolean;
  isScreenSharing?: boolean;
  isHost?: boolean
}

interface VideoCallRoomProps {
  roomId: string;
  participants?: Participant[];
  onLeave?: () => void;
  onToggleMute?: (isMuted: boolean) => void;
  onToggleVideo?: (isEnabled: boolean) => void;
  onToggleScreenShare?: (isSharing: boolean) => void;
  className?: string
}

export const VideoCallRoom: React.FC<VideoCallRoomProps> = ({ 
  roomId;
  participants;
