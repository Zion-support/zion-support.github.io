
import React, { useMemo } from 'react';
import { User } from "lucide-react";
import { Conversation } from "@/types/messaging";
import { ConversationItem } from "./ConversationItem";
import { FixedSizeList, as, List, ListChildComponentProps } from "react-window";