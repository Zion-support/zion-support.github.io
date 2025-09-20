import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import { TalentProfile } from "@/types/talent";

interface ContractPreviewProps {
  contractContent: string;
  talent: TalentProfile;
  onClose: () => void;
  status: "ready" | "sending" | "sent";
}

export function ContractPreview({
  contractContent,
  talent,
  onClose,
  status,
}: ContractPreviewProps) {
  const handleDownload = () => {
    const blob = new Blob([contractContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contract-${talent.name.replace(/\s+/g, "-").toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSend = () => {
    // In a real app, this would send the contract via email
    console.log("Sending contract to:", talent.email);
    console.log("Contract content:", contractContent);
  };

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 max-h-96 overflow-y-auto">
        <pre className="whitespace-pre-wrap text-sm">{contractContent}</pre>
      </div>
      
      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
        <Button onClick={handleSend} disabled={status === "sending"}>
          <Send className="h-4 w-4 mr-2" />
          {status === "sending" ? "Sending..." : "Send Contract"}
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}