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
