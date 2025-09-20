import React from 'react';
import { Badge } from "@/components/ui/badge";,
import { Button } from "@/components/ui/button";,
import { Card, CardContent } from "@/components/ui/card";,
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";,
import { Building, MapPin, Clock, DollarSign, Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { JobMatch } from "@/types/jobs";
interface JobMatchProps {matchId: string;