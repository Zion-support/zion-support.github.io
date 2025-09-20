import React from "react";

redirectUrl?: string,
}
export function PaymentButton({
<<<<<<< HEAD
>;
{isProcessing ? (
<>
<Loader2 className="h-4 w-4 mr-2 animate-spin" />
Processing...;
</>
) : (
buttonText;
)}
</Button>
)
}catch (error) {';
logErrorToProduction ('Payment error:', {
data: error;
=======
    >
      {isProcessing ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Processing...
</>
      ) : (
        buttonText
      )}
    </Button>
  )
}catch (error) {'
  logErrorToProduction ('Payment error:', {
  data: error;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
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
}'"  )
}