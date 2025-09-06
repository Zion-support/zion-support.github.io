      });
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
        <div>;
          <label html_for="message" className="block text - sm font - medium text - gray - 700 mb - 2">;
            Message *;
          </label>;
          <textarea;
            id="message";
            name="message";
            value={form_data.message}
            on_change={handleInputChange}
            required;
            rows={5}
            className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
            placeholder="Tell us about your project...";
          />;
        </div>;
        <button;
          type="submit";
          disabled={is_submitting}
          className="w - full bg - blue - 600 text - white py - 3 px - 4 rounded - md hover:bg - blue - 700 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:ring - offset - 2 disabled:opacity - 50 disabled:cursor - not - allowed transition duration - 200";
        >;
          {is_submitting ? (
            <div className="flex items - center justify - center">;
              <LoadingSpinner size="sm" />;
              <span className="ml - 2">Sending...</span>;
            </div>) : (
            'Send Message')}
        </button>;
      </form>;
    </div>);
}
;
export default ContactForm;