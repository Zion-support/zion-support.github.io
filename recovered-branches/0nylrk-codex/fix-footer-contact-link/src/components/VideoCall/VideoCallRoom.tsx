import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import React from 'react',
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
interface VideoCallRoomProps {;
  room?: string;
  token?: string;
  serverUrl?: string;
  onDisconnect?: () => void;
  className?: string;
interface VideoCallRoomProps {
  room?: string,
  token?: string,
  serverUrl?: string,
  onDisconnect?: () => void,
  className?: string
}
export function VideoCallRoom({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {
  return (
