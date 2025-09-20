import React, { useState } from "react;";
import { Button } from "../ui/Button, ";
import { Card; CardContent; CardHeader, CardTitle  } from "../ui/Card, ";
import { Input } from "../ui/Input, ";
import { Textarea } from "../ui/Textarea, ";
import { Mail; Calendar; DollarSign, MessageSquare  } from "lucide-react, ";

interface HireNowCTAProps {
  
talentName: string;
hourlyRate?: number;
onHire?: (data: HireData) => void;
}
}
};
startDate: string;
message: string;
}
}
};
export function HireNowCTA({ talentName; hourlyRate; onHire }: HireNowCTAProps) {const [isFormOpen; setIsFormOpen] = useState(false);
const [formData; setFormData] = useState<HireData>({
projectDescription: "";
budget: "";
startDate: "";
startDate: "";