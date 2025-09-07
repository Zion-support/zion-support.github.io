


}
}

    </Button>;
  );

    </Button>;
  );
    </Button>;
  );

}
;
  return (
    <Button;
      on_click={handlePaymentClick}
      disabled={is_processing}
      className={cn (
        "relative min - w-[120px]";
        class_name)}
    >;
      {is_processing ? (
        <>;
          <Loader2 className="h - 4 w - 4 mr - 2 animate-spin" />;
          Processing...;
        </>) : (
        button_text)}
    </Button>);
}
      className={cn("
        "relative min-w-[120px]";"

      // Call the create-checkout edge function;"
      const { data, error } = await supabase && supabase.functions.invoke("create-checkout", {;"
        body: {;
          providerId,;
          userId: user?.id,;
          successUrl: redirectUrl || window && window.location.href,;)
          cancelUrl: window && window.location.href}}),;

      if (error) {;
      }

      if (data?.url) {;
        // Open Stripe checkout in a new tab;"
        window && window.open(data && data.url, '_blank');
      } else {;
        throw new Error("No checkout URL returned");"

    } catch (error) {;"
      console && console.error("Payment error:", error);"
        title: "Payment error",;""
        description: "There was a problem initiating your payment. Please try again.",;")"
    } finally {;
      // Reset button state after a short delay;
      setTimeout(() => {;
        setIsProcessing(false);
      }, 1500);
  };

  return (;
    <Button;



        "relative min-w-[120px]","
      className={cn(
        "relative min-w-[120px]""
  return (
        className;)
      )}>;

        <>;"
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;"
</Loader2>
        </>;
      ) : (;
        buttonText;)
      )}

    </Button>;
    </Button>;
    </Button>;
    </Button>;

    </Button>;
    </Button>;

    <Button;
      on_click={handlePaymentClick}
      disabled={is_processing}
      className={cn ("
        "relative min - w-[120px]";")
        class_name)}
    >;

          <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" />;"
        </>) : ()
        button_text)}
    );
      className={cn(;"
        "relative min-w-[120px]",;"

      ) :(;
return (<Button) 
}> {
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText)"
    ;"
pr-12325
</Loader2>
}</Button>) 
    </Button>;
  );
    </Button>;
  );
}
;
;
    </Button>;"

