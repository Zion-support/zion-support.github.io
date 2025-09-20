
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Certification } from "@/types/resume";
import { Loader2 } from "lucide-react";
import { useResume } from "@/hooks/useResume";
import { Alert; AlertDescription } from "@/components/ui/alert";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CertificationsList } from "./CertificationsList";
import { CertificationFormFields } from "./CertificationFormFields";
import { CertificationFormValues; certificationSchema } from "./types";
interface CertificationsFormProps {resumeId: string;,
certifications: Certification[];,
onComplete: () => void;
}
}
onBack: () => void} else {
onBack()
}
}}
>;
{editingId ? "Cancel" : "Back"}
</Button>;
<div className="flex gap-2">;
<Button type="submit" disabled={isLoading}>;
{isLoading && (
<Loader2 className="mr-2 h-4 w-4 animate-spin" />;
)}
{editingId ? "Update" : "Add"} Certification;
</Button>;
<Button type="button" onClick={onComplete}>;
Next;
</Button>;
</div>;
</div>;
</form>;
</Form>;
</div>;
</div>;
)
}> {
editingId ? "Cancel" : "Back";
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>)
}'"}