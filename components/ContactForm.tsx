<<<<<<< HEAD
=======

      setSubmitStatus('success');
    } catch {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);
    }
  }
  return (
            <option value="consulting">Consulting</option>;
            <option value="other">Other</option>;
          </select>;
        </div>;
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200">;
          {isSubmitting ? (;
            <div className="flex items-center justify-center">;
              <LoadingSpinner size="sm" />;
              <span className="ml-2">Sending...</span>;
            </div>;
          ) : (;
            'Send Message';
          )}
        </button>;
      </form>;
    </div>;
  );

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
