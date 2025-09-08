    if (!email) return;
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
      <div className="bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl p-6 text-center">
        <CheckCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
        <h4 className="text-lg font-semibold text-white mb-2">Successfully Subscribed!</h4>
        <p className="text-zion-slate-light">
          Thank you for subscribing to our newsletter. You'll receive updates soon!
};
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      
      {message && (
        <p className={`text-sm ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
};
