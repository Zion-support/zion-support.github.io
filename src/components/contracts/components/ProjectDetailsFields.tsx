interface Service {
  
id: string;
name: string;
}
}
}

import React from "react";
import { CalendarIcon } from "lucide-react";
        <FormField
                    disabled = {(date) => date < new Date()}
        <FormField
                    disabled = {(date) => date < form.getValues("startDate")}