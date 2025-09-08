
interface ChatMessageProps {


  message: string
  isUser: boolean

  timestamp: Date

}







            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User" />;


            <AvatarImage;
              src="https://placehold.co/40x40?text=AI";
              alt="Zion Support";

        "max-w-[80%] rounded-lg px-4 py-2 text-sm";
        isUser
          ? "bg-zion-purple text-white"












  return formattedMessage





}


// Function to convert URLs and help links to actual clickable links;
function formatMessageWithLinks (message: string): string {
  // Replace URLs;
  const url_regex = /(https?:\/\/[^\s]+)/g,
  let formatted_message = message.replace (
    url_regex,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text - zion - cyan underline hover: text - zion - cyan / 80">$1</a>');
;
  // Replace help center references like [Getting Started];
  const helpCenterRegex = /\[([^\]]+)\]/g,
  formatted_message = formatted_message.replace (
    helpCenterRegex,
    '<a href="/help/$1" class="text - zion - cyan underline hover: text - zion - cyan / 80">$1</a>'),
  return formatted_message;
}



