

import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

=======
import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
}
export function TalentCardAvatar({
  profilePicture
  fullName
}: TalentCardAvatarProps) {
  // Get initials for avatar fallback

  const getInitials = (name: string) => {
    return name

      .split(' ')
      .map(part => part[0])
      .join('')

  );

}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
