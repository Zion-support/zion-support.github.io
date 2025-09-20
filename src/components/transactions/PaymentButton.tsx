redirectUrl?: string
}
export function PaymentButton({
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
})
toast ({
}finally {
  
  //Reset button state after a short delay setTimeout ( () => {
  setIsProcessing (false)
}, 1500)
}
}> {"
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText)
}</Button>)
}'"  )
}