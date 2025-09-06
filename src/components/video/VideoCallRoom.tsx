import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Participant {
  id: string,
  name: string,
  avatar?: string;
  isMuted?: boolean;
  isVideoEnabled?: boolean;
  isScreenSharing?: boolean;
  isHost?: boolean
}

interface VideoCallRoomProps {
  roomId: string,

  className?: string
}

export const VideoCallRoom: React.FC<VideoCallRoomProps> = ({ 

  roomId;
  participants = [],