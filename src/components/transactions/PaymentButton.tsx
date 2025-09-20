<<<<<<< HEAD
redirectUrl?: string}
=======
import React from "react";

redirectUrl?: string,
}
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
export function PaymentButton({
>;
{isProcessing ? (
<>;
<Loader2 className="h-4 w-4 mr-2 animate-spin" />;
Processing...;
</>;
) : (
buttonText;
)}
</Button>;
)
}catch (error) {";
logErrorToProduction ("Payment error:", {
data: error;
})
toast ({
}finally {
//Reset button state after a short delay setTimeout ( () => {
setIsProcessing (false)
}, 1500)
}
}> {";
isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText)
}</Button>)
}""  )
}