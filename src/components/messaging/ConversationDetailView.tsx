
            type="submit"
            disabled={!newMessage.trim() || isSending}
          >
            {isSending ? 'Sending...' : 'Send'}
          </Button>
        </form>

